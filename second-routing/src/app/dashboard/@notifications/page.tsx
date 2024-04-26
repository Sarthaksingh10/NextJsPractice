import React from 'react'
import Card from '../../../../components/card'
import Link from 'next/link'

export default function Notifications() {
  return (
    <Card>
      Notifications slot
      <Link href='/dashboard/archived' className='relative left-2 underline'>Archived</Link>
    </Card>
  )
}
