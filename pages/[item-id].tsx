// printed-books/:book-id
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { CountQueuingStrategy } from "stream/web";
import data from "../data.json";

import { useRouter } from "next/router";

export default function ProsAndCons() {
  const router = useRouter();
  const { query } = useRouter();

  // const [pAndCArr, setPAndCArr] = useState(null);

  // useEffect(() => {
  //   if (router.isReady) {
  //     let prosAndConsArray = JSON.parse(query.arr);
  //     // return prosAndConsArray;

  //     setPAndCArr(prosAndConsArray);
  //   }
  // }, [router.isReady]);

  if (!query.arr) {
    return null;
  }

  let prosAndConsArray = JSON.parse(query.arr);

  return (
    <div>
      <p>ID: {query?.id}</p>

      <h1>Title: {query?.title}</h1>

      <h1>Pros and Cons Data</h1>

      <h4>Pros</h4>
      {prosAndConsArray[0]?.pros?.pros?.map((pro) => (
        <ul key={pro}>
          <li>{pro}</li>
        </ul>
      ))}

      <h4>Cons</h4>
      {prosAndConsArray[1]?.cons?.cons?.map((con) => (
        <ul key={con}>
          <li>{con}</li>
        </ul>
      ))}
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       "/item-id",
//       // Object variant:
//       { params: { "item-id": "item-id" } },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   console.log(context);

//   return {
//     props: {
//       userData: data,
//     },
//   };
// }
