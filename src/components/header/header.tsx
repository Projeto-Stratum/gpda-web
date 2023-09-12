import useScroll from "@/hooks/useOnScrolls";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideSheet from "./components/sidesheet";
import { MenuToggle, MenuToggleSpan } from "./styles";
import { ArrowDown } from "@styled-icons/evaicons-solid";
import MenuProfile from "./components/menuProfile";
import { useCreateId } from "@/stores/useId";
import { useScrollDown } from "@/hooks/useDownScroll";

export default function Header() {
  const windowHeigh = typeof window !== "undefined" ? window.innerHeight : 0;
  const isScrolledHero = useScroll(windowHeigh);
  const isScrolledDown = useScrollDown();

  const [showMenu, setShowMenu] = useState(false);
  const [animationOff, setAnimationOff] = useState<boolean>(false);

  const handlerMenu = () => {
    if (!showMenu) {
      return setShowMenu(true);
    }

    setAnimationOff(true);
    document.body.style.overflow = "unset";

    setTimeout(() => setShowMenu(false), 295);
  };

  useEffect(() => {
    if (showMenu) {
      setAnimationOff(false);
    }
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    }
  }, [showMenu]);

  return (
    <>
      <header className="fixed px-4 top-0 right-0 left-0 z-[60] ">
        <div
          className={`
          fixed inset-0 h-16 md:h-24 
          
        `}
        />
        <div
          className={`${
            isScrolledDown && "text-opacity-0 text-transparent invisible"
          } relative text-gray-200 z-50 flex items-center transition-all duration-300 justify-center w-full h-16 px-8 text-sm md:h-24 md:px-20`}
        >
          <div className="grid items-center justify-between min-w-full grid-cols-3 md:grid-cols-3">
            <div className="fixed top-[16px] max-h-[36px] !z-[9999] items-center h-full mt-2 md:hidden">
              <MenuToggle onClick={() => handlerMenu()}>
                <MenuToggleSpan
                  isScrolledDown={isScrolledDown}
                  checked={showMenu}
                ></MenuToggleSpan>
                <MenuToggleSpan
                  isScrolledDown={isScrolledDown}
                  checked={showMenu}
                ></MenuToggleSpan>
                <MenuToggleSpan
                  isScrolledDown={isScrolledDown}
                  checked={showMenu}
                ></MenuToggleSpan>
              </MenuToggle>
            </div>

            <div className="flex justify-center col-[2] md:col-[1] justify-self-center md:justify-self-start">
              <Link href={"/"}>
                <div className="cursor-pointer md:ml-0 max-w-fit">
                  {/* <Image
                    alt="logo GPDA"
                    src="/assets/images/LogoPets.svg"
                    width={45}
                    className="min-w-max"
                    height={45}
                  /> */}
                  <div className="flex justify-center text-3xl font-medium ">
                    GPDA
                  </div>
                </div>
              </Link>
            </div>

            <nav className="justify-center hidden 0 md:flex">
              <ul className="flex space-x-5">
                <li>
                  <Link href={"/"}>
                    <span className="text-sm uppercase duration-200 ">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/explore"}>
                    <span className="text-sm uppercase duration-200 ">
                      Explore
                    </span>
                  </Link>
                </li>
                <li>
                  <Link target="_blanck" href={"/prestador/login"}>
                    <span className="text-sm uppercase duration-200 ">
                      NewsLetter
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="justify-end hidden md:flex">
              <div>
                <span
                  aria-label="incoming"
                  className="text-sm uppercase duration-200 cursor-default opacity-70"
                >
                  Loja
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
          fixed inset-0 duration-300 transition-all h-0 ${
            isScrolledDown
              ? "opacity-0"
              : isScrolledHero && "shadow-sm bg-black md:h-24 h-16 "
          }
        `}
        />
      </header>

      {showMenu && (
        <SideSheet
          isOpen={showMenu}
          overlay={true}
          onClose={() => handlerMenu()}
          animationOff={animationOff}
        />
      )}
    </>
  );
}
