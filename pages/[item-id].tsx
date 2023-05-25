// @ts-nocheck
import React from "react";
import StructuredData from "../components/StructuredData";

import { useRouter } from "next/router";

export default function ProsAndCons() {
  const { query } = useRouter();

  if (!query.arr) {
    return null;
  }

  let prosAndConsArray = JSON.parse(query.arr);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    // "name": "Samsung galaxy A53",
    name: query.title,
    review: {
      "@type": "Review",
      // "name": "Samsung galaxy A53 review",
      name: query.title,
    },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          // name: "Stunning Screen",
          name: prosAndConsArray[0].pros.pros[0],
        },
        {
          "@type": "ListItem",
          position: 2,
          // name: "Quality Cameras",
          name: prosAndConsArray[0].pros.pros[1],
        },
        {
          "@type": "ListItem",
          position: 3,
          // name: "Five years of security updates",
          name: prosAndConsArray[0].pros.pros[2],
        },
      ],
    },
    negativeNotes: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          // name: "No wireless charging",
          name: prosAndConsArray[1].cons.cons[0],
        },
        {
          "@type": "ListItem",
          position: 2,
          // name: "Average performance",
          name: prosAndConsArray[1].cons.cons[1],
        },
      ],
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />

      <div
        style={{
          textAlign: "center",
          listStylePosition: "inside",
        }}
      >
        <h1>Phone Model: {query?.title}</h1>

        <h2>ID: {query?.id}</h2>

        <h2>Pros and Cons Data</h2>

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
    </>
  );
}
