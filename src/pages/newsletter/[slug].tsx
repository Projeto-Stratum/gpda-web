import Head from "next/head";
import HomeScreen from "@/modules/home/screens/home";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NewsScreen from "@modules/newsletter/screens/news";
import { useRouter } from "next/router";

export default function NewsLetterArtigo() {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <>
      <Head>
        <title>GPDA - {slug} </title>
      </Head>
      <Header />
      <NewsScreen />
      <Footer />
    </>
  );
}
