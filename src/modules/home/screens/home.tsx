import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { KeyboardArrowDown } from "@styled-icons/material-outlined";
import { HomeContainer } from "../styles";

export default function HomeScreen() {
  return (
    <>
      <div className="h-screen relative flex justify-center md:pt-[96px] md:p-7 p-6 pt-[68px]">
        <div className="max-w-[900px] flex z-[1] flex-col h-full justify-between">
          <div>
            <div className="flex flex-col items-center w-full py-4 ">
              <h1 className=" text-xl md:text-[2.3rem] md:leading-10 my-6 mt-10 max-w-[650px] py-4  font-medium text-center font-korataki text-white uppercase">
                Grupo de Pesquisa e Desenvolvimento Aeroespacial
              </h1>
            </div>
          </div>
          <div>
            <div className="mb-3 space-y-2">
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <input
                  className="w-full caret-white placeholder:text-white/60 pr-10 pl-6 font-semibold md:max-w-[60%] h-[50px] border-2 border-white/60 bg-white/10 rounded text-black outline-none focus:border-white"
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                  aria-label="Service Email"
                />
                <button className="bg-white md:max-w-[30%] flex-1 text-black uppercase min-h-[50px] rounded text-xs font-bold py-1 px-2">
                  CADASTRAR EMAIL
                </button>
              </div>
              <div className="text-sm md:px-6">
                <h2 className="max-w-full font-medium text-white/80 text-start">
                  Fique por dentro das notícias do mundo aeroespacial se
                  inscrevendo em nossa newsletter com seu email.
                </h2>
              </div>
            </div>
            <span className="flex justify-center animate-bounce">
              <KeyboardArrowDown size={40} className=" animate-pulse" />
            </span>
          </div>
        </div>
        <Image
          src={"/assets/images/spacex-large.jpg"}
          alt={"hero"}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 object-cover object-center w-screen h-screen"
        />
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex relative md:min-h-screen md:max-h-screen min-h-[50vh] max-h-[50vh] md:w-1/2">
          <Image
            src={"/assets/images/satelite.jpg"}
            alt={"satelite"}
            width={1920}
            height={1080}
            className="absolute top-0 left-0 object-cover object-center md:min-h-screen md:max-h-screen min-h-[50vh] max-h-[50vh] md:w-full"
          />
        </div>
        <div className="flex items-center bg-black  md:min-h-screen min-h-[50vh] md:max-h-screen md:w-1/2 px-10 md:px-20 xl:px-36 py-16">
          <div className="flex flex-col justify-center max-w-2xl gap-10">
            <h2 className="text-2xl font-medium uppercase md:text-3xl xl:text-5xl">
              Loren ipsum dolor sit amet, consectetur adipiscing elit. Donec.
            </h2>
            <p className="text-sm md:text-lg">
              Loren ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              mi sed lectus vestibulum aliquet. Donec ac mi Loren ipsum dolor
              sit amet, consectetur adipiscing elit. Donec ac mi sed lectus
              vestibulum aliquet. Donec ac mi
            </p>
            <button className="px-4 py-3 focus:bg-white focus:text-black text-sm font-bold w-72 min-w-[10rem] uppercase border-2 border-white rounded">
              ver mais
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex md:w-1/2 order-2 items-center bg-black md:min-h-screen min-h-[50vh]  md:max-h-screen px-10 md:px-20 xl:px-36 py-16">
          <div className="flex flex-col justify-center max-w-2xl gap-10 ">
            <h2 className="text-2xl font-medium uppercase md:text-3xl xl:text-5xl">
              Loren ipsum dolor sit amet, consectetur adipiscing elit. Donec.
            </h2>
            <p className="text-sm md:text-lg">
              Loren ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              mi sed lectus vestibulum aliquet. Donec ac mi Loren ipsum dolor
              sit amet, consectetur adipiscing elit. Donec ac mi sed lectus
              vestibulum aliquet. Donec ac mi
            </p>
            <button className="px-4 py-3 focus:bg-white focus:text-black text-sm font-bold w-72 min-w-[10rem] uppercase border-2 border-white rounded">
              ver mais
            </button>
          </div>
        </div>
        <div className="flex relative order-1 md:order-2 md:w-1/2 md:min-h-screen md:max-h-screen min-h-[50vh] max-h-[50vh]">
          <Image
            src={"/assets/images/quadroBranco.jpg"}
            alt={"quadroBranco"}
            width={1920}
            height={1080}
            className="absolute top-0 left-0 object-cover object-center md:min-h-screen md:max-h-screen min-h-[50vh] max-h-[50vh] md:w-full"
          />
        </div>
      </div>
    </>
  );
}
