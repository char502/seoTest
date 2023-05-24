// @ts-nocheck
import React from "react";

import { useRouter } from "next/router";

export default function ProsAndCons() {
  const { query } = useRouter();

  if (!query.arr) {
    return null;
  }

  let prosAndConsArray = JSON.parse(query.arr);

  return (
    <div
      style={{
        textAlign: "center",
        listStylePosition: "inside",
      }}
    >
      <div
        style={{
          textAlign: "center",
          listStylePosition: "inside",
        }}
      >
        <h1>ID: {query?.id}</h1>

        <h1>Phone Model: {query?.title}</h1>

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
    </div>
  );
}
