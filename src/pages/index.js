import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import { Poppins } from "next/font/google";
import Lottie from "lottie-react";
import { ToastContainer, toast, Bounce } from "react-toastify";

import animation from "../data/animations/docs.json";
import { nifs } from "@/data/nifs/nifs";
import { PWA } from "@/utils/checkPWA";
import copyToClipboard from "@/utils/utility";
import { generateNIF } from "@/utils/generateNIF";

import Drawer from "@/components/Drawer/Drawer";
import InstallPrompt from "@/components/InstallPrompt/InstallPrompt";

import Styled, {
  Button,
  Card,
  Mobile,
  MobileView,
  NifContainer,
  Select,
  Validation,
} from "@/styles/Styled";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "auto",
  subsets: ["latin"],
});

export default function Home({ initialNif, initialNifType }) {
  const [nif, setNif] = useState(initialNif);
  const [nifType, setNifType] = useState(initialNifType);
  const [isPWA, setIsPWA] = useState(null);

  useEffect(() => setIsPWA(PWA()), []);

  useEffect(() => {
    if (nifType !== "0") {
      setNif(generateNIF(nifType));
    }
  }, [nifType]);

  const handleGenerateNIF = () => setNif(generateNIF(nifType));

  const validateNIF = (nif) => {
    window.open(`https://www.nif.pt/?q=${nif}`, "_blank");
  };

  const handleCopy = (nif) => {
    copyToClipboard(nif);
    toast.success("NIF Fresquinho copiado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  const renderDesktopView = () => (
    <>
      <Styled.Container className={poppins.className}>
        <ToastContainer />
        <Styled.ContentWrapper>
          <Styled.ProjectTitleContainer>
            <Styled.Title>Gerador de NIFs</Styled.Title>
          </Styled.ProjectTitleContainer>
          <Card.Container>
            <Card.Content>
              <Card.NifLabel>O seu NIF:</Card.NifLabel>
              <Card.NifValue>{nifType === "0" ? "N/A" : nif}</Card.NifValue>
            </Card.Content>
            <Card.Toolbar>
              <Select.Label htmlFor="nif-type">Tipo de NIF</Select.Label>
              <Select.Prop
                id="nif-type"
                value={nifType}
                onChange={(e) => setNifType(e.target.value)}
              >
                <Select.Option defaultValue disabled value="0">
                  Escolha um tipo
                </Select.Option>
                {nifs.map((type) => (
                  <Select.Option key={type.idx} value={type.val}>
                    {type.name}
                  </Select.Option>
                ))}
              </Select.Prop>
            </Card.Toolbar>
            <Button.Group>
              <Button.Prop
                type="button"
                disabled={nifType === "0"}
                onClick={handleGenerateNIF}
              >
                <Button.Label>
                  Gerar <Button.QueryLabel>Outro</Button.QueryLabel>
                  <GiCycle />
                </Button.Label>
              </Button.Prop>
              <Button.Prop
                type="button"
                disabled={nifType === "0"}
                onClick={() => validateNIF(nif)}
              >
                <Button.Label>
                  Validar <Button.QueryLabel>NIF</Button.QueryLabel>
                  <MdVerified />
                </Button.Label>
              </Button.Prop>
              <Button.Prop
                type="button"
                disabled={nifType === "0"}
                onClick={() => handleCopy(nif)}
              >
                <Button.Label>
                  Copiar <FaCopy />
                </Button.Label>
              </Button.Prop>
            </Button.Group>
          </Card.Container>
        </Styled.ContentWrapper>
        <Styled.Lottie>
          <Lottie loop animationData={animation} autoplay />
        </Styled.Lottie>
      </Styled.Container>
      <MobileView.Container>
        <InstallPrompt />
      </MobileView.Container>
    </>
  );

  const renderMobileView = () => (
    <MobileView.Container className={poppins.className}>
      <MobileView.Navbar>
        <Drawer />
      </MobileView.Navbar>
      <MobileView.Wrapper>
        <MobileView.ProjectTitleContainer>
          <MobileView.Title>Gerador de NIFs</MobileView.Title>
          <MobileView.NifLabel>O seu NIF:</MobileView.NifLabel>
        </MobileView.ProjectTitleContainer>
        <MobileView.NifContainer>
          <NifContainer.NifValue>
            {nifType === "0" ? "N/A" : nif}
          </NifContainer.NifValue>
        </MobileView.NifContainer>
        <Validation.Container>
          {nifType !== "0" && (
            <button onClick={() => validateNIF(nif)}>
              <Validation.Message>
                Validado por NIF.PT <MdVerified />
              </Validation.Message>
            </button>
          )}
        </Validation.Container>
      </MobileView.Wrapper>
      <Mobile.LottieContainer>
        <Lottie loop animationData={animation} autoplay />
      </Mobile.LottieContainer>
    </MobileView.Container>
  );

  return isPWA ? renderMobileView() : renderDesktopView();
}

export async function getServerSideProps() {
  return {
    props: {
      initialNif: "",
      initialNifType: "0",
    },
  };
}
