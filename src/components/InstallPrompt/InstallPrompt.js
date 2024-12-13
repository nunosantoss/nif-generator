
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { Prompt } from "@/styles/Styled";

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    setIsIos(isIOS());

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the installation prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuário aceitou a instalação da PWA");
        } else {
          console.log("Usuário rejeitou a instalação da PWA");
        }
        setDeferredPrompt(null); // Reset the event
      });
    }
  };

  return (
    <Prompt.Container>
      {isIos && <Prompt.ArrowUp />}
      <Prompt.IosContent>
        <Prompt.DeviceTitle>Num dispositivo móvel?</Prompt.DeviceTitle>
        {isIos ? (
          <Prompt.IosInstructions>
            <Prompt.StepGroup>
              1. Clique em
              <Prompt.Mention>
                <IoShareOutline size={26} />
              </Prompt.Mention>
            </Prompt.StepGroup>
            <span>
              2. Escolha
              <Prompt.Mention>Adicionar ao ecrã principal</Prompt.Mention>
            </span>
          </Prompt.IosInstructions>
        ) : (
          <Prompt.AndroidTitle>
            Tire mais proveito da nossa aplicação!
          </Prompt.AndroidTitle>
        )}
      </Prompt.IosContent>
      {!isIos && (
        <Prompt.AndroidContent>
          <Prompt.AndroidDownload onClick={handleInstallClick}>
            <Prompt.AndroidDownloadTitle>
              <MdDownload /> Instalar
            </Prompt.AndroidDownloadTitle>
          </Prompt.AndroidDownload>
        </Prompt.AndroidContent>
      )}
      <Prompt.ImageContainer>
        <Image
          src="/original.png"
          width={128}
          height={128}
          alt="NIF Generator Logo"
        />
      </Prompt.ImageContainer>
    </Prompt.Container>
  );
};

export default InstallPrompt;
