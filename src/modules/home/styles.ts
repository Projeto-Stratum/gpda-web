import styled, { keyframes } from "styled-components";

const backgroundTransition = keyframes`
  0%, 40% {
    background-image: url("/assets/images/spacex-large.jpg");
  }
  60%, 100% {
    background-image: url("/assets/images/nasa-large.jpg");
  }
`;

export const HomeContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  height: 100vh;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: url("/assets/images/spacex-large.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  padding: 68px 24px 24px 24px;

  animation: ${backgroundTransition} 25s infinite alternate;

  @media (max-width: 768px) {
    padding: 96px 28px 28px 28px;
  }

  @supports (-webkit-touch-callout: none) {
    .intro {
      background-attachment: scroll;
    }
  }
`;
