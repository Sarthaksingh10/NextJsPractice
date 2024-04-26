import React from 'react'
import Link from 'next/link'
import Card from '../../../../../components/card'
export default function ArchivedPageslot() {
  return (
    <Card>
      Archived notifications
      <Link href='/dashboard' className='underline relative left-2'>Default</Link>
    </Card>
  )
}
