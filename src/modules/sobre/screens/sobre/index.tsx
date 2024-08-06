import HeroPage from "@/components/heroPages";
import Image from "next/image";
import InfiniteScroll from "@/components/infiniteScroll";
import { motion } from "framer-motion";
import MembersPack from "@/components/bubbleChart";
import Link from "next/link";
import { dataMember } from "../../data";
import timeData from "@/utils/mockData/time.json";


export default function SobreScreen() {

  const {data} = timeData;

  const coordenação = data.filter((member) => member.tier <= 2);
  const equipe = data.filter((member) => member.tier > 2);

  return (
    <>
      <HeroPage title={"Sobre nós"} image={"/assets/images/Sobre_Header.jpg"} />
      <div className="relative flex justify-center px-12 bg-black">
        <div className="relative text-right max-w-[1680px] w-full py-20">
          <div className="md:w-[55%] w-full pb-12 text-right relative inline-block">
            <div className="relative w-full md:h-[35vw] pb-[100%]">
              <Image
                src={"/assets/images/gpdaUFABC.jpg"}
                alt={"gpdaUFABC"}
                width={1920}
                height={1080}
                className="absolute top-0 left-0 right-0 z-[1] h-full max-h-full min-w-full"
              />
            </div>
          </div>
          <div className="md:w-[35%] md:top-1/2 ">
            <div className="text-left md:absolute md:w-1/3 md:-translate-y-1/2 space-y-7 md:top-1/2">
              <h2 className="text-4xl font-korataki">GPDA</h2>
              <span className="text-2xl">
                Grupo de Pesquisa e Desenvolvimento Aeroespacial
              </span>
              <p className="text-lg">
                Visamos promover o trabalho em equipe, o desenvolvimento de
                liderança, planejamento, ética e profissionalismo, além de
                incentivar o desenvolvimento de pesquisas acadêmicas correlatas
                ao setor aeroespacial.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="https://www.instagram.com/gpdaufabc/?hl=pt"
                  target="_blank"
                  passHref
                  className="max-w-fit"
                >
                  <button className="px-4 relative group hover:animate-buttonColorMouseIn py-3 mt-12 text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                    instagram
                    <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center bg-black">
        <div className="relative flex z-[2] flex-col justify-center min-h-screen gap-20 max-w-[1680px] py-20 overflow-hidden ">
          <div className="flex justify-center px-12 text-2xl text-center md:text-4xl font-korataki">
            Presidência e Coordenadores
          </div>
          <div className="text-center">
            <InfiniteScroll
              direction="left"
              items={coordenação}
            />
            <div className="flex justify-center px-12 my-12 text-2xl md:text-4xl font-korataki">
              Nossa equipe
            </div>
            <InfiniteScroll
              direction="right"
              items={equipe}
            />
          </div>
        </div>
      </div>
      <div className="relative py-20 bg-black">
        <div className={`lg:max-w-screen-lg relative px-4 mx-auto  z-10`}>
          <h3 className="px-12 mt-10 mb-10 text-2xl text-center md:text-4xl font-korataki">
            Membros da nossa história
          </h3>
          <div
            style={{
              aspectRatio: "1/1",
            }}
            className="z-10 overflow-hidden"
          >
            <MembersPack member={dataMember} />
          </div>
        </div>
        <Image
          src={"/assets/images/background-gradient.jpg"}
          alt={"illustriation1_d"}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 right-0 z-0 h-full max-h-full min-w-full "
        />
      </div>
    </>
  );
}
