// @ts-nocheck
// import type {
//   GetServerSideProps,
//   InferGetServerSidePropsType,
//   NextPage,
// } from "next";
import StructuredData from "../components/StructuredData";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.json";

const Article /* :NextPage */ = ({
  extra,
  products,
}/* :InferGetServerSidePropsType<typeof getServerSideProps>) */) => {
  console.log(data);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: products[0]?.data?.title,
    // id: products[0]?.data?.id,
    review: {
      "@type": "Review",
      name: products[0]?.data?.title,
    },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: products[0]?.data?.information?.pros?.pros[0],
        },
        {
          "@type": "ListItem",
          position: 2,
          name: products[0]?.data?.information?.pros?.pros[1],
        },
        {
          "@type": "ListItem",
          position: 3,
          name: products[0]?.data?.information?.pros?.pros[2],
        },
      ],
    },
    negativeNotes: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: products[0]?.data?.information?.cons?.cons[0],
        },
        {
          "@type": "ListItem",
          position: 2,
          name: products[0]?.data?.information?.cons?.cons[1],
        },
      ],
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className={styles.container}>
        <Head>
          <title>Mobile Phone Review</title>
          <meta name="description" content="Brightsites seo test" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Mobile Phone Reviews</h1>

          <h1>Phone Model: {products[0]?.data?.title}</h1>

              <h2>ID: {products[0]?.data?.id}</h2>

              <h2>Pros and Cons Data</h2>

              <h4>Pros</h4>
              {products[0]?.data?.information?.pros?.pros?.map((pro) => (
                <ul key={pro}>
                  <li>{pro}</li>
                </ul>
              ))}

              <h4>Cons</h4>
              {products[0]?.data?.information?.cons?.cons?.map((con) => (
                <ul key={con}>
                  <li>{con}</li>
                </ul>
              ))}

        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export const getServerSideProps /* :GetServerSideProps */ = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public,  s-maxage=300, stale-while-revalidate=59"
  );
  context.res.setHeader("Content-Security-Policy", `frame-ancestors 'self';`);

  try {
    return {
      props: {
        ...data,
      },
    };
  } catch (err) {
    return { props: { data: "err" } };
  }
};
export default Article;