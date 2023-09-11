import { useState, useEffect } from "react";
import { MenuToggle, MenuToggleSpan } from "../../styles";

import { StyledContent, StyledOverlay, StyledTitle } from "./styles";
import { SideSheetProps } from "./types";
import { createPortal } from "react-dom";
import Link from "next/link";

const SideSheet = ({ overlay, animationOff, onClose }: SideSheetProps) => {
  return createPortal(
    <>
      {/* overlay */}
      {overlay && <StyledOverlay onClick={onClose} disappear={animationOff} />}

      {/* content */}
      <StyledContent disappear={animationOff}>
        <ul className="flex flex-col gap-4 mt-20">
          <li className="pb-2 border-b border-gray-400/60 ">
            <Link className="" href={"/"}>
              <p className="text-[1.1rem] w-full duration-200 ">Home</p>
            </Link>
          </li>
          <li className="pb-2 border-b border-gray-400/60 ">
            <Link href={"/explore"}>
              <p className="text-[1.1rem] w-full duration-200 ">Explore</p>
            </Link>
          </li>
          <li className="pb-2 border-b border-gray-400/60 ">
            <Link href={"/prestador/login"} target="_blanck">
              <p className="text-[1.1rem] w-full duration-200 ">Newsletter</p>
            </Link>
          </li>
        </ul>
      </StyledContent>
    </>,
    document.body
  );
};

export default SideSheet;
