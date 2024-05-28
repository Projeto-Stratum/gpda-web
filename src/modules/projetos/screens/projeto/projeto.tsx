import Image from "next/image";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline";
import Link from "next/link";
import myData from "@/utils/mockData/projetos.json";
import { useRouter } from "next/router";


export default function ProjetoScreen() {
  const {data} = myData;

  const router = useRouter();
  const {slug} = router.query;

  const project = data.find((project) => project.slug === slug);

  if (!project) {
    router.push("/projetos");
    return <div></div>;
  }



  return (
    <>
      <div className=" bg-black flex justify-center min-h-screen w-full pb-20 relative px-12 pt-[90px]">
        <div className="flex flex-wrap justify-center items-center w-full max-w-[1400px] gap-5">
          <div className="w-full">
            <h2 className="text-xs uppercase cursor-pointer max-w-fit">
              <Link
                href={"/projetos"}
                passHref={true}
                className="flex items-center justify-center gap-1 transition-all duration-300 cursor-pointer hover:gap-3 max-w-fit"
              >
                <ArrowIosBackOutline size={16} /> Voltar para projetos
              </Link>
            </h2>
          </div>
          <div className=" mb-24 min-h-[280px] overflow-hidden relative text-[#fafafa] w-full ">
            <div className="relative p-5 z-[1] pb-[35%]">
              <Image
                src={project.image}
                alt={"illustriation1_d"}
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
                {project.title}
              </p>
              <p className="text-xl">{project.description}</p>
              <div className="flex flex-col gap-4 mt-10 md:flex-row">
                <div>
                  {project.text}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
