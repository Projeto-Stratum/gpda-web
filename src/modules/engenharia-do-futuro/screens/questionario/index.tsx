import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import myData from "@/utils/mockData/questionario.json";
import { useState } from "react";
import { EmojiFrown, EmojiNeutral, EmojiSmile, EmojiLaughing, EmojiHeartEyes } from "@styled-icons/bootstrap";
import { usePostVote } from "@/services/eng-futuro";
import { QuestaoType, QuestionarioPayload } from "@/entities/questionario";


export default function TeamAvaliationScreen() {
  const { dor, solucao, apresentacao } = myData;
  const router = useRouter();
  const { slug } = router.query;
  const title = slug && typeof slug === 'string' && slug.replace("-", " ");
  const { register, handleSubmit, formState: { errors, isSubmitted, isValid } } = useForm<any>();

  const [selectedValues, setSelectedValues] = useState({});

  const onSubmit = (data: QuestionarioPayload) => {
    data.name = 'luis felipe'
    const id = "2";
    console.log(data);
    create({data, id});
  };

  const { mutate: create, isLoading: isLoadingCreate } = usePostVote({
    onSuccess: async () => {
      router.push(`/engenharia-do-futuro/avaliacao`);
    },
    onError: () => {
      alert("Erro ao enviar avaliação");
    },
  });

  const handleSelection = (sectionName: string, index: number, value: string) => {
    setSelectedValues(prev => ({ ...prev, [`${sectionName}_${index}`]: value }));
  };
  
  const likertIcons = [
    { value: "1", icon: <EmojiFrown size={24} />, label: "Neutro", color: "text-red-500" },
    { value: "2", icon: <EmojiNeutral size={24} />, label: "Ok", color: "text-orange-500" },
    { value: "3", icon: <EmojiSmile size={24} />, label: "Bom", color: "text-yellow-500" },
    { value: "4", icon: <EmojiLaughing size={24} />, label: "Ótimo", color: "text-green-400" },
    { value: "5", icon: <EmojiHeartEyes size={24} />, label: "Excelente", color: "text-green-500" }
  ];

  const renderSection = (sectionTitle: string, questions: QuestaoType[], sectionName: string) => (
    <section className="mb-12 border-b border-gray-800 border-solid">
      <h2 className="mb-4 text-2xl text-center text-white uppercase font-korataki">{sectionTitle}</h2>
      {questions && questions.map((questionario: QuestaoType, index: number) => (
        <div key={index} className="py-6">
          <label className="block mb-6 text-lg text-white">{index + 1} - {questionario.pergunta}</label>
          <div className="flex justify-between">
            {likertIcons.map(({ value, icon, label, color }) => (
              <label
                key={value}
                className={`flex flex-col items-center p-2 w-1/5 h-1/5 hover:bg-gray-500/60 rounded-lg cursor-pointer ${selectedValues[`${sectionName}_${index}`] === value ? 'bg-gray-500 ' : ''}`}
                onClick={() => handleSelection(sectionName, index, value)}
              >
                <input
                  type="radio"
                  value={value}
                  {...register(`${questionario.id}`, { required: true })}
                  className="hidden"
                />
                <motion.div className={color}>
                  {icon}
                </motion.div>
                <span className="text-sm text-white">{label}</span>
              </label>
            ))}
          </div>
          {errors[`${questionario.id}`] && <span className="text-red-500">Porfavor selecione uma opção</span>}
        </div>
      ))}
    </section>
  );

  return (
    <>
      <div className="bg-black min-h-screen w-full pb-20 relative pt-[96px] md:px-7 p-6">
        <div className="flex justify-center border-b border-gray-800 border-solid pb-[45px]">
          <h1 className="text-3xl text-center uppercase font-korataki">{title}</h1>
        </div>
        <div className="flex flex-col items-center z-[2] w-full gap-10 pt-[45px]">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[1680px] gap-5">
            {renderSection("Dor", dor, "q1")}
            {renderSection("Solução", solucao, "q2")}
            {renderSection("Apresentação", apresentacao, "q3")}
            <div className="flex justify-center w-full">
              <button type="submit" className="px-4 relative group hover:animate-buttonColorMouseIn py-3 text-white text-sm font-bold w-full md:w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                {isLoadingCreate ? `Carregando` : `Enviar avaliação`}
                <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
              </button>
            </div>
            {Boolean(!isValid) && isSubmitted && <p className="mt-3 text-red-500">Há opções não selecionadas</p>}
          </form>
        </div>
      </div>
    </>
  );
}