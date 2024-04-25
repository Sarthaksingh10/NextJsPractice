"use client";
import React from 'react'
import {useRouter} from 'next/navigation'
export default function NavigatingProgrammatically() {
    const router = useRouter()
    const handlenavigation=()=>{
     router.push("./")
    }

  return (
    <div>
      <h1>Navigation Programmatically</h1>
      <button onClick={handlenavigation}>Place Order</button>
    </div>
  )
}
