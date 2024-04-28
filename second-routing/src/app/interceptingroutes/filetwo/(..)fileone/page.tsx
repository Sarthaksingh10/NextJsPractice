import Link from 'next/link';
import React from 'react';
export default function Conditionalroutes() {
  return (
    <div className='flex flex-col'>
      <p>This is the <span className='font-bold text-2xl'>Intercepted</span> routes page.</p>
      <Link href='/interceptingroutes/filetwo'>Filetwo</Link>
      <p>On Refreshing this page the orignal/unintercepted route page will appear</p>
    </div>
  )
}