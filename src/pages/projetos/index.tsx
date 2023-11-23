import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ProjetosScreen from "@/modules/projetos/screens";

export default function NewsLetter() {
  return (
    <>
      <Head>
        <title>GPDA - Projetos</title>
      </Head>
      <Header />
      <ProjetosScreen />
      <Footer />
    </>
  );
}
