import React from 'react'
import art from '../../assets/art.jpg'
import { DownloadIcon } from '@heroicons/react/solid'

function TrackItem({index}) {
    return (
        <div className='grid md:grid-cols-4 grid-cols-3 flex-row items-center my-3 text-sm'>
            <div className="col-span-1 flex flex-row items-center">
                <p className='mr-4 text-gray-500 md:flex hidden font-bold'>{index}</p>
                <div className="img h-12 w-12 rounded oveflow-hidden">
                    <img src={art} alt="album art" className='rounded' />
                </div>
                <p className='font-bold text-black m-2'>Song Name</p>
            </div>
            <div className="col-span-1 text-gray-400 font-semibold">
                Album Name
            </div>
            <div className="col-span-1 md:flex hidden text-gray-400 font-semibold ">
                Artist Name
            </div>
            <div className="col-span-1 flex flex-col items-center">
                <div className="flex bg-gray-100 p-2 rounded hover:bg-gray-300 cursor-pointer mx-auto">
                    <DownloadIcon height={20} width={20} className='text-black' />
                </div>
            </div>
        </div>
    )
}

export default TrackItem
