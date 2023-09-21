import Head from "next/head";
import HomeScreen from "@/modules/home/screens/home";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NewsLetterScreen from "@modules/newsletter/screens";

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
