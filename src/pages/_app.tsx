import Default from "@/layouts/default";
// import { queryClient } from "@/libs/react-query";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="theme-color" content="rgb(0, 0, 0)" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-title" content="GPDA" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="site_name" property="og:site_name" content="GPDA" />
        <meta name="author" content="GPDA" />
        <meta name="locale" property="og:locale" content="pt-br" />
        <link
          rel="shortcut icon"
          href="/assets/images/gpda-logo.svg"
          type="image/x-icon"
        />
        <meta
          name="Description"
          content="O GPDA é uma entidade de pesquisa do setor aeroespacial criada em 2009, vinculada a quatro entidades estudantis da área aeroespacial: Harpia Aerodesign, Colibri, Sirius e Rocket Design"
        />
        <meta
          name="Keywords"
          content="GPDA GRUPO DE PESQUISA E DENSENVOLVIMENTO AEROESPACIAL UFABC"
        />
      </Head>
      <Default>
        <Component {...pageProps} />
      </Default>
    </QueryClientProvider>
  );
}
