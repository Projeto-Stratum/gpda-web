import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NoticiaScreen from "@/modules/engenharia-do-futuro/screens/questionario";
import TeamAvaliationScreen from "../../../modules/engenharia-do-futuro/screens/questionario";

export default function TimeVotacaoPage() {

  return (
    <>
      <Head>
        <title>GPDA - Avaliação </title>
      </Head>
      <Header />
      <TeamAvaliationScreen />
      <Footer />
    </>
  );
}
