import styled from "styled-components";

export const MenuToggle = styled.div`
  display: block;
  position: relative;

  -webkit-user-select: none;
  user-select: none;
`;

export const MenuToggleSpan = styled.span`
  display: block;
  width: 28px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;

  border-radius: 3px;

  transform-origin: 4px 0px;
  transform: ${(props) =>
    props.checked ? "rotate(45deg) translate(-2px, -1px);" : "none"};

  background-color: ${(props) =>
    props.isScrolledDown ? "transparent" : "#fff"};

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:nth-last-child(1) {
    transform-origin: 0% 100%;
    transform: ${(props) =>
      props.checked ? " rotate(-45deg) translate(3px, 1px)" : "none"};
  }

  &:nth-last-child(2) {
    opacity: ${(props) => (props.checked ? "0" : "1")};
    transform: ${(props) =>
      props.checked ? "rotate(0deg) scale(0.2, 0.2)" : "none"};
  }

  &:nth-last-child(3) {
    transform-origin: 0% 0%;
    transform: ${(props) =>
      props.checked ? "rotate(45deg) translate(-2.3px, -7px);" : "none"};
  }
`;
