import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import StructuredData from "../components/StructuredData";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.json";

export interface ProdSpecObj {
  value: string;
  key: string;
}

export interface ProsObj {
  pros: string[];
}

export interface ConsObj {
  cons: string[];
}

export interface InformationObj {
  productSpec: ProdSpecObj;
  pros: ProsObj;
  cons: ConsObj;
}

export interface ExtraObj {
  bestFor: string;
  brand: string;
  information: InformationObj;
  model: string;
  priceComparisonProvider: string;
  productId: string;
  productIDType: string;
  rating: string;
}

export interface DataObj {
  extra: ExtraObj;
  information: InformationObj;
}

export interface ArticleProps {
  extra: ExtraObj;
  products: DataObj;
}

export default function Article({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!products) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: products[0]?.data?.title,
    description: products[0]?.data?.extra?.model,
    brand: products[0]?.data?.extra?.brand,
    review: {
      "@type": "Review",
      name: products[0]?.data?.title,
      author: {
        "@type": "Person",
        name: "authors name",
      },
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
          {products[0]?.data?.information?.pros?.pros?.map((pro: string) => (
            <ul key={pro}>
              <li>{pro}</li>
            </ul>
          ))}

          <h4>Cons</h4>
          {products[0]?.data?.information?.cons?.cons?.map((con: string) => (
            <ul key={con}>
              <li>{con}</li>
            </ul>
          ))}
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
