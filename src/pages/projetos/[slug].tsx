import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ProjetoScreen from "@/modules/projetos/screens/projeto/projeto";

export default function NewsLetter() {
  return (
    <>
      <Head>
        <title>GPDA - Projetos</title>
      </Head>
      <Header />
      <ProjetoScreen />
      <Footer />
    </>
  );
}
