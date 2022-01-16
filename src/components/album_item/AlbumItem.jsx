import React from 'react'
import art from '../../assets/art.jpg'
import { useNavigate } from 'react-router-dom'

function AlbumItem({type}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=> window.open("/explore", "_blank")} className='flex flex-col col-span-1 text-sm cursor-pointer'>
            <div className="relative rounded-lg pb-4 overflow-hidden">
                <img src={art} alt="album art on album item" className='rounded-lg bg-opacity-50 bg-black' />
                <p className='absolute text-xs font-semibold bg-teal-500 text-white bottom-5 left-2 p-1 rounded capitalise'>{type}</p>
            </div>
            <p className='text-black font-bold text-sm'>Album Name</p>
            <p className='text-gray-500 font-semibold text-sm'>Album Artist</p>
            <p className='text-gray-500 font-semibold text-sm'>2021</p>
        </div>
    )
}

export default AlbumItem
