import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/router";
import NoticiaScreen from "@/modules/newsletter/screens/Noticia/news";

export default function NewsLetterArtigo() {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <>
      <Head>
        <title>GPDA - {slug} </title>
      </Head>
      <Header />
      <NoticiaScreen />
      <Footer />
    </>
  );
}
