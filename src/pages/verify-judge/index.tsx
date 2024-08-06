import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import VerifyJudgeScreen from "@/modules/verifyJudge/screens";

export default function VerifyJudge() {
  return (
    <>
      <Head>
        <title>GPDA - Verificação</title>
      </Head>
      <VerifyJudgeScreen />
      <Footer />
    </>
  );
}
