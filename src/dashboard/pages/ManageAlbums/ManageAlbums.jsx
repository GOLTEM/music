import React from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import { PlusIcon } from '@heroicons/react/outline'
import CustomButton from '../../../components/buttons/CustomButton';
import AlbumItem from '../../../components/album_item/AlbumItem';
import {useNavigate} from 'react-router-dom'

function ManageAlbums() {
    const navigate = useNavigate()
    return (<DashboardLayout>
        <div className="flex flex-row items-center justify-between mb-8">
            <p className='md:flex hidden capitalize text-gray-700 font-semibold'>a list of all albums in database</p>
            <div className="flex-1"></div>
            <CustomButton onClick={()=> navigate('/add-album')} text={<span className='flex flex-row items-center'>
                <PlusIcon height={20} width={20} className='text-white' />
                <p className='ml-2'>add new album</p>
            </span>} />
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-center md:gap-x-16 gap-x-8 gap-y-8">
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 0]?.map((album, index)=>(
                    <AlbumItem />
                ))
            }
        </div>
        <div className="flex flex-row items-center justify-around my-16">
        <div className="next">
                <CustomButton text={'Previous Page'}/>
            </div>
            <div className="next">
                <CustomButton text={'Next Page'}/>
            </div>
        </div>
    </DashboardLayout>);
}

export default ManageAlbums;
