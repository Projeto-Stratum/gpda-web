import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import EngResultadoScreen from "../../../modules/engenharia-do-futuro/screens/resultado";

export default function EngResultado() {
  return (
    <>
      <Head>
        <title>GPDA - Engenharia do Futuro - Resultado</title>
      </Head>
      <Header />
      <EngResultadoScreen />
      <Footer />
    </>
  );
}
