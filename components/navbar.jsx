import React from 'react'

const navbar = () => {
    return (
        <nav className="flex justify-between mx-auto px-20 bg-transparent text-gray-400 p-4 font-bold">
            <div className="mt-3">Logo</div>
            <div className="grid grid-flow-col grid-rows-1 gap-8 mt-3">
                <a href="">News</a>
                <a href="">Wiki</a>
                <a href="">Forums</a>
                <a href="">Store</a>
                <a href="">Donate</a>
            </div>
            <button className="bg-green-500 text-black p-3">Download</button>
        </nav>
    )
}

export default navbar
