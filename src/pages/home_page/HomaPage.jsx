import React from 'react'
import AlbumItem from '../../components/album_item/AlbumItem'
import GeneralLayout from '../../layouts/GeneralLayout'
import { ArrowRightIcon } from '@heroicons/react/outline'
import CustomButton from '../../components/buttons/CustomButton'

function HomaPage() {
    return (
        <GeneralLayout>
            <div className="max-w-7xl flex flex-col items-center mx-auto">
                <div className="flex flex-col text-lg font-bold text-black">
                    <div className="flex flex-row items-center justify-between">
                        <p className='my-8 ml-2'>Recent Posts</p>
                        <span className='flex flex-row items-center gap-2'>
                            <p>See All</p>
                            <ArrowRightIcon height={16} width={16} />
                        </span>
                    </div>
                    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-6">
                        {
                            [1, 2, 3, 4, 5]?.map((item, index) => (
                                <AlbumItem index={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col text-lg font-bold text-black">
                    <div className="flex flex-row items-center justify-between">
                        <p className='my-8 ml-2'>Trending</p>
                        <span className='flex flex-row items-center gap-2'>
                            <p>See All</p>
                            <ArrowRightIcon height={16} width={16} />
                        </span>
                    </div>
                    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-6">
                        {
                            [1, 2, 3, 4, 5]?.map((item, index) => (
                                <AlbumItem index={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col text-lg font-bold text-black">
                    <div className="flex flex-row items-center justify-between">
                        <p className='my-8 ml-2'>Albums</p>
                        <span className='flex flex-row items-center gap-2'>
                            <p>See All</p>
                            <ArrowRightIcon height={16} width={16} />
                        </span>
                    </div>
                    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-6">
                        {
                            [1, 2, 3, 4, 5]?.map((item, index) => (
                                <AlbumItem index={index} />
                            ))
                        }
                    </div>

                    <div className="flex flex-col items-center w-full my-16">
                        <CustomButton text={'Load More'} outline />
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default HomaPage
