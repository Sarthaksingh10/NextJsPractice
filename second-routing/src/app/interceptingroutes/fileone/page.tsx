import Link from 'next/link';
import React from 'react';
export default function Conditionalroutes() {
  return (
    <div className='flex flex-col'>
      This is the original routes page without interception.
      <Link href='/interceptingroutes/filetwo'>Filetwo</Link>
    </div>
  )
}
