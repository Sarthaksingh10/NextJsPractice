import React from 'react'
//this is the example of dynamic routing in which we can allocate id to the file
export default function productdiscription({params,}:{
    params:{productId:string};
}) {
  return  <h1>Details about the product  {params.productId}</h1>
   
  
}
