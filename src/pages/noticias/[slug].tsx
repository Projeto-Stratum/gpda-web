import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NoticiaScreen from "@/modules/newsletter/screens/Noticia/news";

export default function NewsLetterArtigo() {

  return (
    <>
      <Head>
        <title>GPDA - Notícias </title>
      </Head>
      <Header />
      <NoticiaScreen />
      <Footer />
    </>
  );
}
