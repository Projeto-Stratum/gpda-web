import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NewsLetterScreen from "@/modules/newsletter/screens/Noticias";

export default function NewsLetter() {
  return (
    <>
      <Head>
        <title>GPDA - Newsletter</title>
      </Head>
      <Header />
      <NewsLetterScreen />
      <Footer />
    </>
  );
}
