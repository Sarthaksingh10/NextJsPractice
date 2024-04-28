import React from 'react'
import Link from 'next/link'
export default function Filetwo() {
  return (
    <div className='flex flex-col w-3/4 text-2xl'>
     <p> This is the Filetwo inside the <span className='font-bold text-orange-500'>intercepted</span> routes.</p>
      <Link href='/interceptingroutes/fileone'>File one</Link>
      <p className='w-full'>On  clicking the above link the routing link will change but it will point to an intercepted router.
        The intercepted route is the one which has some dots within a brackets. If prefix is 
        <span className='font-bold text-3xl text-orange-300 w-screen flex'> (.) this means the intercepted route is inside the same folder .</span>
        <span className='font-bold text-3xl text-red-600  w-screen flex'>(..) this means the intercepted route is inside the parent folder.</span> 
        <span className='font-bold text-3xl text-gray-700   w-screen flex'> (..)(..) this means the intercepted route is inside the parent folder of the parent folder.</span> 
      </p>
    </div>
  )
}
