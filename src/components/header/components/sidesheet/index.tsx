import { useState, useEffect, useRef } from "react";
import { MenuToggle, MenuToggleSpan } from "../../styles";
import { StyledContent, StyledOverlay, StyledTitle } from "./styles";
import { SideSheetProps } from "./types";
import { createPortal } from "react-dom";
import Link from "next/link";

const SideSheet = ({ overlay, animationOff, onClose }: SideSheetProps) => {
  const ulRef = useRef<HTMLUListElement | null>(null);

  const navItems = [
    {
      name: "Início",
      link: "/",
    },
    {
      name: "Projetos",
      link: "/projetos",
    },
    {
      name: "Newsletter",
      link: "/newsletter",
    },
    {
      name: "Sobre",
      link: "/sobre",
    },
    {
      name: "Contato",
      link: "/contato",
    },
  ];

  useEffect(() => {
    const ulElement = ulRef.current;

    if (ulElement) {
      const liElements = ulElement.querySelectorAll("li");

      liElements.forEach((li, index) => {
        setTimeout(() => {
          li.classList.add("animate-fade-in");
        }, index * 100);
      });
    }
  }, []);

  return createPortal(
    <>
      {overlay && <StyledOverlay onClick={onClose} disappear={animationOff} />}

      <StyledContent disappear={animationOff}>
        <ul ref={ulRef} className="flex flex-col gap-4 mt-20">
          {navItems.map((item) => (
            <li
              key={item.link}
              className="pb-2 text-sm font-medium uppercase transition-all text-[#fafafa] border-b opacity-0 border-gray-400/30"
            >
              <Link className="" href={item.link} onClick={onClose}>
                <p className="w-full duration-200 ">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </StyledContent>
    </>,
    document.body
  );
};

export default SideSheet;
