// utils/checkPWA.js

export const PWA = () => {
  // Verifica se está a correr no lado do cliente
  if (typeof window === "undefined") {
    return false; // Se não está no lado do cliente, não é PWA
  }

  // Verifica se o service worker está registado
  const isPWA =
    window.matchMedia("(display-mode: fullscreen)").matches ||
    window.navigator.fullscreen;

  return isPWA ? true : false;
};
