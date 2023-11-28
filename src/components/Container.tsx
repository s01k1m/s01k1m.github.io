import Head from "next/head";
import Nav from "./Nav";
import metadata from "../data/metadata";

const Container = (props) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Container;
