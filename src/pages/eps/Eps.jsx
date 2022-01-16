import React from 'react'
import AlbumItem from '../../components/album_item/AlbumItem'
import GeneralLayout from '../../layouts/GeneralLayout'

function Eps() {
    return (
        <GeneralLayout>\
            <div className="max-w-7xl flex flex-col mx-auto ">
                <p className='text-black mb-8 font-bold text-3xl'>
                    EPs
                </p>
                <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-6">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map((item, index) => (
                            <AlbumItem type={'EP'} index={index} />
                        ))
                    }
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Eps
