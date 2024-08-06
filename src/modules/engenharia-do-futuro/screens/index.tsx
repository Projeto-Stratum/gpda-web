import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroPage from "@/components/heroPages";
import { useListJudges, useListTeams } from "@/services/eng-futuro";
import Cookies from 'js-cookie'
import { CookieKey } from "@/utils/cookies";
import { useState, useEffect } from "react";
import { JudgeEngFut } from "@/entities/Judges";
import { useRouter } from "next/router";

export default function TeamsScreen() {

  const {data, isLoading } = useListTeams();
  const {data: judges, isLoading: isLoadingJudge, isFetched } = useListJudges();
  const [judgeData, setJudgeData] = useState<JudgeEngFut>({
    name: "",
    created_at: "",
    updated_at: "",
    team_1: 0,
    team_2: 0,
  });
  const connectId = Cookies.get(CookieKey.UserId);
  const router = useRouter();

  useEffect(() => {
    if (judges) {
      const judgeData = judges.find(item => item.name === connectId);
      if (!judgeData) return;
      setJudgeData(judgeData);
    }

    if (isFetched && !judges) {
      console.log('Erro ao buscar os dados dos juízes');
      router.push(`/engenharia-do-futuro/avaliacao`);
    }
  }
  , [judges, connectId, isFetched, router]);


  return (
    <>
      <HeroPage
        title={"Avaliação das Equipes"}
        image={"/assets/images/avaliacao.jpg"}
      />
      <div className=" bg-black min-h-screen w-full pb-20 relative px-12 pt-[45px]">
        <div className="flex justify-center border-b border-gray-800 border-solid pb-[45px]">
            <h1 className="text-3xl uppercase font-korataki">Times</h1>
        </div>
        <div className="flex flex-col items-center z-[2] w-full gap-10  pt-[45px]">
          <div className="flex flex-wrap justify-start w-full max-w-[1680px] gap-5">
            {!isLoading &&
              data &&
              data.map((time) => (
                <div
                  key={time.team_id}
                  className=" mb-24  relative  text-[#fafafa] w-full md:basis-project-card-half"
                >
                  <div className="relative mt-12 z-[2]">
                    <p className="mt-3 text-xl text-center uppercase font-korataki">
                      {time.team_name}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/engenharia-do-futuro/avaliacao/${time.team_name.replace(/\s/g, "-")}?id=${time.team_id}`}
                        passHref
                        className="max-w-fit"
                      >
                        <button disabled={judgeData[`team_${time.team_id}`] === 1} className="px-4 relative group hover:animate-buttonColorMouseIn py-3 mt-12 text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                          {judgeData && judgeData[`team_${time.team_id}`] === 1 ? 'Já Avaliado' : 'Avaliar'}
                          <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
