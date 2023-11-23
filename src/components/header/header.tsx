import useScroll from "@/hooks/useOnScrolls";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideSheet from "./components/sidesheet";
import { MenuToggle, MenuToggleSpan } from "./styles";
import { useScrollDown } from "@/hooks/useDownScroll";
import Image from "next/image";

export default function Header() {
  const windowHeigh = typeof window !== "undefined" ? window.innerHeight : 0;
  const isScrolledHero = useScroll(windowHeigh);
  const isScrolledDown = useScrollDown();
  const isScrollBase = useScroll(0);

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
          className={`${
            isScrollBase &&
            isScrolledDown &&
            "text-opacity-0 text-transparent stroke-transparent invisible opacity-0"
          }  relative text-gray-200 z-50 flex items-center transition-all duration-500 justify-center w-full h-16 px-8 text-sm md:h-24 md:px-20`}
        >
          <div className="grid items-center justify-between min-w-full grid-cols-3 md:grid-cols-3">
            <div className="fixed top-[16px] max-h-[36px] !z-[9999] items-center h-full mt-2 md:hidden">
              <MenuToggle onClick={() => handlerMenu()}>
                <MenuToggleSpan
                  isScrolledDown={isScrollBase && isScrolledDown}
                  checked={showMenu}
                ></MenuToggleSpan>
                <MenuToggleSpan
                  isScrolledDown={isScrollBase && isScrolledDown}
                  checked={showMenu}
                ></MenuToggleSpan>
                <MenuToggleSpan
                  isScrolledDown={isScrollBase && isScrolledDown}
                  checked={showMenu}
                ></MenuToggleSpan>
              </MenuToggle>
            </div>

            <div className="flex justify-center col-[2] md:col-[1] justify-self-center md:justify-self-start">
              <Link href={"/"}>
                <div className="flex items-center max-h-full gap-2 cursor-pointer md:ml-0 max-w-fit">
                  <Image
                    alt="logo GPDA"
                    src="/assets/images/gpda-logo.svg"
                    width={56}
                    height={56}
                  />
                  <div className="md:flex hidden text-white justify-center text-2xl font-medium !font-korataki">
                    GPDA
                  </div>
                </div>
              </Link>
            </div>

            <nav className="justify-center hidden text-sm font-medium uppercase md:text-base 0 md:flex">
              <ul className="flex space-x-5">
                <li>
                  <Link href={"/"}>
                    <span className="">Início</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/projetos"}>
                    <span className="">projetos</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/newsletter"}>
                    <span className="">NewsLetter</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex justify-end">
              <div>
                <span
                  aria-label="incoming"
                  className="text-base uppercase cursor-default opacity-70"
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
            isScrollBase && isScrolledDown
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
