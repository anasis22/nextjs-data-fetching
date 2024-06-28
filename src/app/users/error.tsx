"use client"

import { useEffect } from "react"

export default function Error({error} : {error : Error}) {
    useEffect(() => {
        console.error(`${error}`)
    },[error])
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
        <div className="text-red-600 font-bold text-xl">Error while fetching Data</div>
    </div>
  )
}