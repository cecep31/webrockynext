import React from 'react'
import {Downloadicons} from './icons/fether';
import Image from 'next/image'

const navbar = () => {
    return (
        <nav className="max-w-7xl flex justify-between mx-auto  bg-transparent text-gray-400 p-5 font-bold">
            <a className=" flex text-2xl text-white" href="">
                <Image src="/logo.png" className="" width={30} height={30} layout="fixed"/>
                <div className="ml-1">Rocky</div>
                <div className="font-normal ml-1">Linux<sup className="align-top text-xs">tm</sup></div>
            </a>
            <div className="grid grid-flow-col grid-rows-1 gap-8 mt-1">
                <a className="hover:text-gray-100" href="/news">News</a>
                <a className="hover:text-gray-100" href="">Wiki</a>
                <a className="hover:text-gray-100" href="">Forums</a>
                <a className="hover:text-gray-100" href="">Store</a>
                <a className="hover:text-gray-100" href="">Donate</a>
            </div>
            <button className="bg-green-500 text-black px-3 py-2 rounded-lg flex"><Downloadicons/><div className="ml-1">Download</div></button>
        </nav>
    )
}

export default navbar



