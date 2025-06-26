import { Hash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Tags({ tagname }: { tagname: string }) {
    return (
        <Link href='' className=" my-3 flex bg-slate-100/10 dark:bg-black/5  shadow shadow-gray-500 rounded-3xl w-fit px-3 py-1">
            <Hash color="#1C77C3" className=''  />
            <p className=' text-black dark:text-white'>{tagname}</p>
        </Link>
    )
}
