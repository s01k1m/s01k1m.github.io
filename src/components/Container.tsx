import Head from "next/head";
import Nav from "./Nav";
import metadata from "../data/metadata";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <Nav />
      </header>
      <main className="m-[20px] md:mx-[200px] md:my-[60px]">
        {props.children}
      </main>
    </>
  );
};

export default Container;
