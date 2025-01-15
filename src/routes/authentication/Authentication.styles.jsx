import styled from "styled-components";

export const Body = styled.div`
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73.5vh;
`;

export const Container = styled.div`
  background-color: #212121;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 868px;
  max-width: 100%;
  min-height: 480px;
  font-family: 'poppins', sans-serif;

  &.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  &.right-panel-active .sign-up-container {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show 0.6s;
  }

  @keyframes show {
      0%,
      49.99% {
          opacity: 0;
          z-index: 1;
      }

      50%,
      100% {
          opacity: 1;
          z-index: 5;
      }
  }
  
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  background-color: #eeeeee;
`;

export const SignUpContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
`;

export const SignInContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  z-index: 2;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

export const Overlay = styled.div`
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayLeft = styled(OverlayPanel)`
  transform: translateX(-20%);
`;

export const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const GhostButton = styled.button`
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const MobileToggle = styled(GhostButton)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #FF4B2B;
    color: #FFFFFF;
  }
`;