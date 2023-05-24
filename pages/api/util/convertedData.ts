// @ts-nocheck

export const prosAndConsObj = data.products.map((product) => {
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
