import Link from 'next/link';
import React from 'react';
export default function Conditionalroutes() {
  return (
    <div className='flex flex-col'>
      This is the Intercepted routes page.
      <Link href='/interceptingroutes/fileone'>Fileone</Link>
    </div>
  )
}
