// import Head from "next/head";
// @ts-nocheck

// import { useRouter } from "next/router";

export default function ProsAndCons({ data }) {
  // const router = useRouter();
  console.log(data.products);
  //   const structuredData = {
  //     "@context": "https://schema.org",
  //     "@type": "BlogPosting",
  //     headline: post.title,
  //     description: post.description,
  //     author: [
  //       {
  //         "@type": "Person",
  //         name: post.author,
  //       },
  //     ],
  //     image: post.imageUrl,
  //     datePublished: post.publishedAt,
  //   };

  const prosAndConsObj = data.products.map((product: any) => {
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

  return (
    <>
      {/* <StructuredData data={structuredData} />
      <article>
        <h1>{post.title}</h1>
        {post.content}
      </article> */}

      <h1>Pros and Cons Data</h1>

      <div>
        {prosAndConsObj?.map((item) => (
          <div key={item.itemTitle}>
            <h3>{item.itemTitle}</h3>

            <h4>Pros</h4>
            {item.prosAndConsArr[0]?.pros?.pros?.map((pro) => (
              <ul key={pro}>
                <li>{pro}</li>
              </ul>
            ))}

            <h4>Cons</h4>
            {item.prosAndConsArr[1]?.cons?.cons?.map((con) => (
              <ul key={con}>
                <li>{con}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
