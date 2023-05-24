// import type {
//   GetServerSideProps,
//   InferGetServerSidePropsType,
//   NextPage,
// } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.json";
import ProsAndCons from "./ProsAndCons";
import Link from "next/link";



const Article /* :NextPage */ = ({
  extra,
  products,
}/* :InferGetServerSidePropsType<typeof getServerSideProps>) */) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Brightsites seo test</title>
        <meta name="description" content="Brightsites seo test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Seo test</h1>

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