import Head from "next/head";
import styled from "styled-components";
import NotFoundPage from "@/modules/notFoundPage/screens";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>GPDA</title>
      </Head>
      <Header />
      <NotFoundPage />
      <Footer />
    </>
  );
}
