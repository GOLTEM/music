import React from 'react'
import GeneralLayout from '../../../layouts/GeneralLayout'
import { Avatar } from '@chakra-ui/react'
import CustomButton from '../../buttons/CustomButton'
import { PlayIcon, DownloadIcon } from '@heroicons/react/solid'
import TrackItem from '../../track_item/TrackItem'
import AlbumItem from '../../album_item/AlbumItem'


const home_links = [
    { name: 'Tracks' }
]

function Home() {
    return (
        <GeneralLayout>
            <div className="relative mt-16 bg-white min-h-screen shadow lg:px-32 md:px-16 px-4">
                <div className="flex md:flex-row flex-col md:items-left items-center">
                    <div className="absolute -top-8">
                        <Avatar size='2xl' name='Segun Adebayo' rounded={'md'} src='https://bit.ly/sage-adebayo' />{' '}
                    </div>
                    <div className="absolute flex flex-col md:items-left items-center lg:left-80 md:left-48 md:left-48 md:-top-4 top-28">
                        <p className='text-gray-700 font-bold text-3xl'>Name of album</p>
                        <p className='text-gray-500 text-sm'>Artist - Tatenda Bako</p>
                        <div className="flex -top-4">
                            <CustomButton text={<span className='flex flex-row items-center'>
                                <PlayIcon height={20} width={20} className='text-white' />
                                <p className='ml-2'>Play</p>
                            </span>} />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col-reverse w-full md:mt-32 mt-56">
                    <div className=" md:w-3/4 w-full flex flex-col">
                        {
                            home_links?.map((link, index) => (
                                <p key={index} className='text-black font-bold'>{link.name}</p>
                            ))
                        }
                        <div className="grid grid md:grid-cols-4 grid-cols-3 flex-row items-center my-3">
                            <div className="col-span-1 flex flex-row items-center">
                                <p className='mr-4 text-gray-500 font-bold'>Song</p>
                            </div>
                            <div className="col-span-1 text-gray-400 font-semibold">
                                Album
                            </div>
                            <div className="col-span-1 md:flex hidden  text-gray-400 font-semibold ">
                                Artist
                            </div>
                            <div className="col-span-1  text-gray-400 font-semibold ">
                                Actions
                            </div>
                        </div>
                        <div className="border-t  border-gray-200 pt-8">

                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, index) => (
                                    <TrackItem index={index} />
                                ))
                            }

                        </div>
                        <div className="ad bg-blue-300 mt-16 h-40 rounded">

                        </div>
                        <span className='flex pt-2 mx-auto'>
                            <CustomButton text={<span className='flex flex-row items-center'>
                                <DownloadIcon height={20} width={20} className='text-white' />
                                <p className='ml-2'>Download</p>
                            </span>} />
                        </span>
                        <p className='my-16 text-black text-xl ml-2 font-bold'>Albums</p>
                        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-6">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, index) => (
                                    <AlbumItem index={index} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:w-1/4 w-full bg-green-300 h-40">

                    </div>

                </div>

            </div>
        </GeneralLayout>
    )
}

export default Home
