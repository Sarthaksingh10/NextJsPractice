 //This is the review side using the next js in this file we have understand the concept of 
//the nested dynamic routing nested dynamic routing can help us give unique id by 
//placing the file inside square brackets
//In the nested dynamic routing the id in the tsx file should be named same as the filename

export default function Reviewofproduct({
    params,
  }: {
    params: { productId: string;
               reviewid: string };
  }) {
    return (
      <h1>
        Review {params.reviewid} of product {params.productId}
      </h1>
    );
  }
  