import { ImArrowUp } from "react-icons/im";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    align-items: center;
    min-height: 100vh;
    padding: 6rem;
    font-style: normal;

    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 768px) {
      display: block;
    }
    @media (min-width: 1024px) {
      padding: 3rem;
    }
  `,

  ContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 320px) {
      gap: 1.25rem /* 20px */;
    }

    @media (min-width: 1024px) {
      margin-top: 0px;
    }

    @media (min-width: 1280px) {
      margin-top: 6rem /* 96px */;
    }
  `,

  ProjectTitleContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  `,

  Title: styled.h1`
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 500;
  `,

  CardNif: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 1536px) {
      gap: 1rem;
    }
  `,

  NifLabel: styled.span`
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    @media (min-width: 1280px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  `,

  NifValue: styled.span`
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    @media (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    @media (min-width: 1280px) {
      font-size: 3.75rem;
      line-height: 1;
    }
  `,

  Lottie: styled.div`
    position: absolute;
    z-index: -10;
    opacity: 0.1;
    top: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 320px) {
      max-width: 280px;
    }
    @media (min-width: 475px) {
      max-width: 320px;
    }
    @media (min-width: 640px) {
      max-width: 475px;
    }

    @media (min-width: 768px) {
      top: 5rem;
      left: 3rem;
      right: 3rem;
      scale: 1.05;
      max-width: 640px;
    }

    @media (min-width: 1024px) {
      scale: 0.5;
      top: 0;
      left: 1rem;
      right: 1rem;
      max-width: 768px;
    }
    @media (min-width: 1280px) {
      top: 0;
      right: 0;
      left: 0;
      max-width: 1024px;
    }
    @media (min-width: 1536px) {
      left: 16rem;
      right: 16rem;
      max-width: 1280px;
    }
  `,
};

export const Card = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    background-color: rgb(0 0 0 / 0.8);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.8),
      0 8px 10px -6px rgb(0 0 0 / 0.8);
    border-radius: 0.75rem;
    border-width: 1px;
    border-color: #171717;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 1536px) {
      gap: 1rem;
    }
  `,

  NifLabel: styled.span`
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    @media (min-width: 1280px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  `,

  NifValue: styled.span`
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    @media (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    @media (min-width: 1280px) {
      font-size: 3.75rem;
      line-height: 1;
    }
  `,

  Toolbar: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    text-align: start;
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  `,
};

export const Select = {
  Label: styled.label`
    display: block;
    font-weight: 500;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  `,

  Prop: styled.select`
    border-width: 1px;
    border-radius: 0.5rem;
    display: block;
    padding: 0.625rem;
    color: #fff;
    background-color: #374151;
    border-color: #4b5563;
    &:focus {
      border-color: #3b82f6;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  `,

  Option: styled.option`
    background-color: rgb(0 0 0 / 0.5);
    color: #fff;
  `,
};

export const Button = {
  Group: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  `,

  Prop: styled.button`
    color: #fff;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background-color: #1f2937;
    &:hover {
      background-color: #111827;
    }
    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    font-weight: 500;
    border-radius: 0.5rem;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    padding-left: 1.25rem /* 20px */;
    padding-right: 1.25rem /* 20px */;
    padding-top: 0.625rem /* 10px */;
    padding-bottom: 0.625rem /* 10px */;

    &:disabled {
      color: rgb(255 255 255 / 0.1);
      background-color: rgb(243 244 246 / 0.1);
      cursor: not-allowed;
    }

    &:disabled:hover {
      background-color: currentColor;
    }
  `,

  Label: styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  `,

  QueryLabel: styled.span`
    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  `,
};

export const MobileView = {
  Container: styled.div`
    background-color: rgb(0 0 0 / 0.4);
    min-height: 100svh;

    @media (min-width: 320px) {
      display: block;
    }

    @media (min-width: 768px) {
      display: none;
    }
  `,
  Navbar: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;

    @media (min-width: 320px) {
      max-width: 280px;
    }

    @media (min-width: 475px) {
      max-width: 320px;
      padding: 3rem;
    }

    @media (min-width: 640px) {
      max-width: 475px;
      padding: 6rem;
    }
  `,
  ProjectTitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  `,

  Title: styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    text-transform: uppercase;
    font-weight: 700;

    @media (min-width: 640px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  `,

  NifLabel: styled.span`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.125rem;
    line-height: 1.75rem;

    @media (min-width: 640px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  `,

  NifContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgb(0 0 0 / 0.5);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5);
    width: 200px;
  `,
};

export const Mobile = {
  BtnLabel: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `,

  ButtonGroup: styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  `,

  Button: styled.button`
    padding: 1rem;
    color: #fff;
    background-color: rgb(8 47 73 / 0.5);
    font-weight: 500;
    box-shadow: 0 4px 6px -1px #000, 0 2px 4px -2px #000;
    border-radius: 0.5rem /* 8px */;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:disabled {
      background-color: rgb(31 41 55 / 0.7);
      color: #6b7280;
      box-shadow: none;
      cursor: not-allowed;
    }
  `,

  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    gap: 0.5rem;
    margin-top: 0.5rem;

    @media (min-width: 475px) {
      grid-column: span 2 / span 2;
    }
  `,

  Select: styled.select`
    border-width: 1px;
    border-radius: 0.5rem;
    display: block;
    padding: 0.625rem;
    background-color: #374151;
    border-color: #4b5563;
    color: #fff;

    &::placeholder {
      color: #9ca3af;
    }
  `,

  LottieContainer: styled.div`
    top: 15rem;
    left: 0;
    scale: 1.25;
    position: absolute;
    z-index: -10;
    opacity: .1;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 320px) {
      max-width: 280px;
    }

    @media (min-width: 475px) {
      max-width: 320px;
      left: 7rem;
      scale: 1.25;
    }

    @media (min-width: 640px) {
      max-width: 475px;
      left: 5rem;
      top: 12rem;
      scale: 1.25;
    }

    @media (min-width: 768px) {
      max-width: 640px;
    }

    @media (min-width: 1024px) {
      max-width: 768px;
    }

    @media (min-width: 1280px) {
      max-width: 1024px;
    }

    @media (min-width: 1536px) {
      max-width: 1280px;
    }
  `,
};

export const NifContainer = {
  NifValue: styled.span`
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;

    @media (min-width: 640px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  `,
};

export const Validation = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Message: styled.span`
    display: flex;
    color: #a3e635;
    text-decoration-line: underline;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  `,
};

export const Prompt = {
  Container: styled.div`
    min-height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,

  ArrowUp: styled(ImArrowUp)`
    font-size: 2.25rem;
    line-height: 2.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #0ea5e9;
    z-index: 10;

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    animation: bounce 1s infinite;
  `,

  IosContent: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    gap: 1rem;
  `,

  DeviceTitle: styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
  `,

  IosInstructions: styled.div`
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `,

  StepGroup: styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  `,

  Mention: styled.span`
    background-color: rgb(38 38 38 / 0.7);
    padding: 0.25rem;
    border-radius: 0.375rem;
  `,

  AndroidTitle: styled.h2`
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
  `,

  AndroidContent: styled.div`
    padding-top: 2.5rem;
  `,

  AndroidDownload: styled.button`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #075985;
    border-radius: 0.5rem;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    color: #fff;
    font-weight: 500;

    box-shadow: 0 4px 6px -1px #000, 0 2px 4px -2px #000;

    &:hover {
      background-color: #082f49;
    }
  `,

  AndroidDownloadTitle: styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
  `,

  ImageContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3.5rem;
  `,
};

export default Styled;
