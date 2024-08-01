import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import TeamsScreen from "@/modules/engenharia-do-futuro/screens";

export default function EngAvaliacao() {
  return (
    <>
      <Head>
        <title>GPDA - Engenharia do Futuro</title>
      </Head>
      <Header />
      <TeamsScreen />
      <Footer />
    </>
  );
}
