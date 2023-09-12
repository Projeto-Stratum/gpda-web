import styled, { keyframes } from "styled-components";

const overlayShow = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const overlayDisappear = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

const contentShow = keyframes`
  0% {
    transform: translateX(-100%) skew(-15deg);
  }
  100% {
    transform: translateX(0%) skew(0deg);
  }
`;

const contentDisappear = keyframes`
  0% {
    transform: translateX(0%) skewX(0deg);
  }
  100% {
    transform: translateX(-100%) skewX(-5deg);
  }
`;

export const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  z-index: 51;

  animation-name: ${(props) =>
    props.disappear ? overlayDisappear : overlayShow};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

const cascadeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledContent = styled.div`
  background-color: #000;
  color: #fff;
  position: fixed;
  z-index: 52;
  padding: 25px 48px;
  top: 0;
  left: 0;
  right: auto;
  max-width: 100vw;
  width: 360px;
  height: 100%;
  translate: translateX(-100%);

  &:focus {
    outline: none;
  }

  animation-name: ${(props) =>
    props.disappear ? contentDisappear : contentShow};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const StyledTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: bold;
  color: #b2b5be;
`;

export const IconButton = styled.button`
  all: unset;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  color: #adbac7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${cascadeAnimation} 0.5s ease-in-out forwards;
`;
