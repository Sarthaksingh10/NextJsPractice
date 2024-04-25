import Link from "next/link"
export default function Products(){
    const productid=100;
      return (
        
        <div>
          
            <h1>Products</h1>
            <Link href='/products/1'><h2>Product 1</h2></Link>
            <Link href="/products/2"><h2>Product 2</h2></Link>
            <Link href="/products/3" replace><h2 >Product 3</h2>
            <p className="opacity-30 font-bold">In this we have used replace function inside the link tag which means that if we click on this link we will be redirected to the home page not on the product page</p></Link>
            <Link href={`products/${productid}`}><h2>Product {productid}</h2></Link>
        </div>
    )
}