//NextJs is the framework of react which solve the problem of seo in react by 
//doing the server side rendering . It also serves the problem of routing
//we do not have to use any other libraries to do routing in nextJs 
//NextJs comes with the file routing routing is done in the files and every file has a name page.tsx
import Link from "next/link";
export default function Home(){
    return( 
    <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl">Hello World</h1>
         
    </div>  );
}


