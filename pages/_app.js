import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/styles.scss";
import "@fontsource/open-sans";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/bouncy-logo.svg" />
        <title>Inflatable Architects - A Component Carousel Site</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
