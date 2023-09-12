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
      name: "Home",
      link: "/",
    },
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "Newsletter",
      link: "/newsletter",
    },
    {
      name: "Sobre",
      link: "/sobre",
    },
  ];

  useEffect(() => {
    const ulElement = ulRef.current;

    if (ulElement) {
      const liElements = ulElement.querySelectorAll("li");

      liElements.forEach((li, index) => {
        // Aplicar a classe de animação com atraso
        setTimeout(() => {
          console.log("aplicando animação");
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
              className="pb-2 transition-all border-b opacity-0 border-gray-400/30"
            >
              <Link className="" href={"/"}>
                <p className="text-[1.1rem] w-full duration-200 ">
                  {item.name}
                </p>
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
