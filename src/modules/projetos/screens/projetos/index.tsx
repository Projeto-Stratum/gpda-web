import HeroPage from "@/components/heroPages";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGetRocketsSpaceX } from "@/services/noticias";
import myData from "@/utils/mockData/projetos.json";

export default function ProjetosScreen() {
  // const { data, isLoading } = useGetRocketsSpaceX();
  const isLoading = false
  const { data } = myData

  return (
    <>
      <HeroPage
        title={"Projetos"}
        image={"/assets/images/rideshare_feature.jpg"}
      />
      <div className=" bg-black min-h-screen w-full pb-20 relative px-12 pt-[90px]">
        <div className="flex flex-col items-center z-[2] w-full gap-10 ">
          <div className="flex flex-wrap justify-center w-full max-w-[1680px] gap-5">
            {!isLoading &&
              data &&
              data.map((project) => (
                <div
                  key={project.id}
                  className=" mb-24 min-h-[280px] relative  text-[#fafafa] w-full md:basis-project-card-half"
                >
                  <div className="relative cursor-pointer p-5 z-[1] pb-[65%]">
                    <Link href={`/projetos/${project.slug}`}>
                      <Image
                        src={project.image}
                        alt={"illustriation1_d"}
                        width={1920}
                        loading="lazy"
                        onLoad={(e) => {
                          e.currentTarget.classList.add("animate-fade-in");
                        }}
                        height={1080}
                        className="absolute top-0 left-0 opacity-0 object-cover object-center max-h-full h-full min-h-full z-[1] "
                      />
                    </Link>
                  </div>
                  <div className="relative mt-12 z-[2]">
                    <p className="text-xl">Departamento de {project.departamento}</p>
                    <p className="mt-3 text-xl uppercase font-korataki">
                      {project.title}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/projetos/${project.slug}`}
                        passHref
                        className="max-w-fit"
                      >
                        <button className="px-4 relative group hover:animate-buttonColorMouseIn py-3 mt-12 text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                          ver mais
                          <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Image
          src={"/assets/images/residentaial_illustriation2_d.jpg"}
          alt={"illustriation1_d"}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 right-0 z-0 object-cover object-center max-h-full min-w-full"
        />
      </div>
    </>
  );
}
