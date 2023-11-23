import { KeyboardArrowDown } from "@styled-icons/material-outlined";
import Image from "next/image";
import { ArrowBack } from "@styled-icons/boxicons-regular";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline";
import Link from "next/link";

export default function NoticiaScreen() {
  return (
    <>
      <div className=" bg-black flex justify-center min-h-screen w-full pb-20 relative px-12 pt-[90px]">
        <div className="flex flex-wrap justify-center items-center w-full max-w-[1400px] gap-5">
          <div className="w-full">
            <h2 className="text-xs uppercase cursor-pointer max-w-fit">
              <Link
                href={"/noticias"}
                passHref={true}
                className="flex items-center justify-center gap-1 transition-all duration-300 cursor-pointer hover:gap-3 max-w-fit"
              >
                <ArrowIosBackOutline size={16} /> Voltar para notícias
              </Link>
            </h2>
          </div>
          <div className=" mb-24 min-h-[280px] overflow-hidden relative text-[#fafafa] w-full ">
            <div className="relative p-5 z-[1] pb-[45%]">
              <Image
                src={"/assets/images/noiterocket.jpg"}
                alt={"noiterocket"}
                width={1920}
                height={1080}
                onLoad={(e) => {
                  e.currentTarget.classList.add("animate-fade-in");
                }}
                className="absolute top-0 left-0 opacity-0 object-cover object-center max-h-full h-full min-h-full z-[1] "
              />
            </div>
            <div className="relative mt-12 z-[2]">
              <p className="my-3 text-xl uppercase font-korataki">
                Projeto STRAUM
              </p>
              <p className="text-xl opacity-80">20 de Novembro de 2023</p>
              <div className="flex flex-col gap-4 mt-10 md:flex-row">
                <div>
                  Loren ipson Loren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipson
                </div>
                <div>
                  Loren ipson Loren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipsonLoren ipsonLoren ipsonLoren ipsonLoren
                  ipsonLoren ipson
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
