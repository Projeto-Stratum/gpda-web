import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SobreScreen from "@/modules/sobre/screens/sobre";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>GPDA - Sobre</title>
      </Head>
      <Header />
      <SobreScreen />
      <Footer />
    </>
  );
}
