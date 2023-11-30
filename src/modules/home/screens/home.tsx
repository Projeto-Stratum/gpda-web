import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { KeyboardArrowDown } from "@styled-icons/material-outlined";
import { motion } from "framer-motion";

export default function HomeScreen() {
  return (
    <>
      <div className="h-screen  bg-black flex justify-center md:pt-[96px] md:p-7 p-6 pt-[68px]">
        <div className="max-w-[900px] flex z-[1] flex-col h-full ">
          <div className="flex flex-col items-center w-full h-full py-4 ">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1 className=" text-xl md:text-[2.3rem] md:leading-10 my-6 mt-10 max-w-[650px] py-4  font-medium text-center font-korataki text-white uppercase">
                Grupo de Pesquisa e Desenvolvimento Aeroespacial
              </h1>
            </motion.div>
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
          onLoad={(e) => {
            e.currentTarget.classList.add("animate-fade-in");
          }}
          className="absolute top-0 left-0 object-cover object-center w-screen h-screen opacity-0"
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
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center max-w-2xl gap-10">
              <h2 className="text-3xl font-medium uppercase font-korataki">
                Sobre nós
              </h2>
              <div className="mb-12 space-y-2 text-base md:text-lg">
                <p>
                  O GPDA é uma entidade de pesquisa do setor aeroespacial criada
                  em 2009, vinculada a quatro entidades estudantis da área
                  aeroespacial: Harpia Aerodesign, Colibri, Sirius e Rocket
                  Design.
                </p>
                <p>
                  Hoje o vínculo com as demais entidades se estabelece apenas
                  por parcerias e colaborações, mas continuamos com os mesmos
                  objetivos, que são: promover o trabalho em equipe, liderança,
                  planejamento, ética e profissionalismo, incentivando o
                  desenvolvimento de projetos e a participação em competições
                  pelas equipes universitárias da área aeroespacial.
                </p>
              </div>
              <Link href="/sobre" passHref className="max-w-fit">
                <button className="px-4 relative group hover:animate-buttonColorMouseIn py-3  text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                  ver mais
                  <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex md:w-1/2 order-2 items-center bg-black md:min-h-screen min-h-[50vh]  md:max-h-screen px-10 md:px-20 xl:px-36 py-16">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center max-w-2xl gap-10 ">
              <h2 className="text-3xl font-medium uppercase font-korataki">
                Faça parte do GPDA
              </h2>
              <div className="mb-12 space-y-2 text-base md:text-lg">
                <p>
                  Quer fazer parte dos nossos times? Se inscreva no processo
                  seletivo, que ocorre no início de cada semestre, e venha fazer
                  parte do nosso grupo!
                </p>
                <p>
                  Nossos times são: Marketing, Tecnologia da Informação, Área de
                  Projetos (Estruturas e Eletrônica) e Área de Pesquisas.
                </p>
                <p>
                  Visamos promover o trabalho em equipe, o desenvolvimento de
                  liderança, planejamento, ética e profissionalismo, além de
                  incentivar o desenvolvimento de pesquisas acadêmicas
                  correlatas ao setor aeroespacial.
                </p>
              </div>
              <Link
                href="https://linktr.ee/gpda_ufabc"
                target="_blank"
                passHref
                className="max-w-fit"
              >
                <button className="px-4 relative group hover:animate-buttonColorMouseIn py-3  text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                  ver mais
                  <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                </button>
              </Link>
            </div>
          </motion.div>
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
      <div className="flex flex-col w-full md:flex-row">
        <div className="relative flex justify-center w-full min-h-screen px-10 py-16 bg-black md:px-20 xl:px-36">
          <div className="flex flex-col items-center z-[2] w-full gap-10 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-medium uppercase font-korataki">
                Nossos projetos
              </h2>
            </motion.div>
            <div className="flex md:flex-wrap md:flex-row flex-col items-center md:items-stretch justify-between w-full max-w-[1280px]">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="md:min-h-[70vh] mb-4 min-h-[280px] cursor-pointer overflow-hidden group relative md:basis-project-card text-[#fafafa]  md:w-full w-[320px]"
                  >
                    <div
                      key={index}
                      className="md:min-h-[70vh] mb-4 min-h-[280px] cursor-pointer overflow-hidden group relative md:basis-project-card text-[#fafafa]  md:w-full w-[320px]"
                    >
                      <Link
                        href={"/projetos/loren-ipson"}
                        passHref
                        className="max-w-fit"
                      >
                        <div className="relative p-5 z-[1]">
                          <p className="uppercase font-korataki mb-[5px] text-xl">
                            Projeto STRAUM
                          </p>
                          <p className="text-xl">Sonda atmosférica</p>
                        </div>
                        <Image
                          src={"/assets/images/Module_3.jpg"}
                          alt={"illustriation1_d"}
                          width={1920}
                          height={1080}
                          className="absolute top-0 left-0 object-cover object-center max-h-full min-h-full transition-all duration-300 ease-in group-hover:scale-105 group-hover:brightness-105"
                        />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/projetos" passHref>
                <button className="px-4 relative group hover:animate-buttonColorMouseIn py-3 mt-12 text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                  ver mais
                  <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                </button>
              </Link>
            </motion.div>
          </div>
          <Image
            src={"/assets/images/home_illustriation1_d.jpg"}
            alt={"illustriation1_d"}
            width={1920}
            height={1080}
            className="absolute top-0 left-0 object-cover object-center max-h-full min-h-full"
          />
        </div>
      </div>
    </>
  );
}
