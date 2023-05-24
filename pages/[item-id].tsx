// printed-books/:book-id
// @ts-nocheck
import { CountQueuingStrategy } from "stream/web";
import data from "../data.json";

import { useRouter } from "next/router";

export default function ProsAndCons() {
  const { query } = useRouter();

  let prosAndConsArray = query.arr ? JSON.parse(query.arr) : null;

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
