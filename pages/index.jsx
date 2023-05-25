// @ts-nocheck
// import type {
//   GetServerSideProps,
//   InferGetServerSidePropsType,
//   NextPage,
// } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.json";
// import ProsAndCons from "./ProsAndCons";
import Link from "next/link";

import StructuredData from "../components/StructuredData";

const Article /* :NextPage */ = ({
  extra,
  products,
}/* :InferGetServerSidePropsType<typeof getServerSideProps>) */) => {
  console.log(data);

  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   // "name": "Samsung galaxy A53",
  //   "name": data.products.title,
  //   "review": {
  //         "@type": "Review",
  //         // "name": "Samsung galaxy A53 review",
  //         "name": data.products.title,
  //       },
  //   "positiveNotes": {
  //           "@type": "ItemList",
  //           "itemListElement": [
  //             {
  //               "@type": "ListItem",
  //               "position": 1,
  //               "name": "Stunning Screen",
  //               "name": data.products.data.information.pros[0]
  //             },
  //             {
  //               "@type": "ListItem",
  //               "position": 2,
  //               "name": "Quality Cameras",
  //               "name": data.products.data.information.pros[1]
  //             },
  //             {
  //               "@type": "ListItem",
  //               "position": 3,
  //               "name": "Five years of security updates",
  //               "name": data.products.data.information.pros[2]
  //             }
  //           ]
  //         },
  //         "negativeNotes": {
  //           "@type": "ItemList",
  //           "itemListElement": [
  //             {
  //               "@type": "ListItem",
  //               "position": 1,
  //               "name": "No wireless charging",
  //               "name": data.products.data.information.cons[0]
  //             },
  //             {
  //               "@type": "ListItem",
  //               "position": 2,
  //               "name": "Average performance",
  //               "name": data.products.data.information.cons[1]
  //             }
  //           ]
  //         }
  // };

  return (
    <>
    <StructuredData data={structuredData} />
    <div className={styles.container}>
      <Head>
        <title>Mobile Phone Reviews</title>
        <meta name="description" content="Brightsites seo test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mobile Phone Reviews</h1>

        <h1>Phones</h1>

        {prosAndConsObj?.map((item) => (
          <div key={item.id}>

            <ul key={item.itemTitle}>
              <li>
                <Link href={{
                  pathname: `/${item.id}`,
                  query: {
                    id: item.id,
                    title: item.itemTitle,
                    arr: JSON.stringify(item.prosAndConsArr)
                  }
                }}>

                  <a><h3>{item.itemTitle}</h3></a>
                </Link>
              </li>
            </ul>

          </div>
        ))}

        {/* <ProsAndCons data={data} /> */}
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

const prosAndConsObj = data.products.map((product) => {
  const prosObj = {
    pros: product.data.information.pros,
  };

  const consObj = {
    cons: product.data.information.cons,
  };

  const pACArr = [prosObj, consObj];

  const finalReviewObj = {
    id: product.data.id,
    itemTitle: product.data.title,
    prosAndConsArr: pACArr,
  };

  return finalReviewObj;
});

console.log(prosAndConsObj);
