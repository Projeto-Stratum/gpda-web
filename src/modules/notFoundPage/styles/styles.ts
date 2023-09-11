import styled, { keyframes } from "styled-components";

const swing = keyframes`
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`;

const swinghair = keyframes`
  0% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(-6deg);
  }
`;

export const Handboy = styled.g`
  animation: ${swing} ease-in-out 1.3s infinite alternate;
  transform-origin: 98% 98%;
  transform-box: fill-box;
`;

export const Girllight = styled.g`
  animation: ${swing} ease-in-out 1.3s infinite alternate;
  transform-origin: 0% 97%;
  transform-box: fill-box;
`;

export const Hairgirl = styled.g`
  animation: ${swinghair} ease-in-out 1.3s infinite alternate;
  transform-origin: 60% 0%;
  transform-box: fill-box;
`;

export const Zero = styled.g`
  transform-origin: bottom;
  transform-box: fill-box;
`;