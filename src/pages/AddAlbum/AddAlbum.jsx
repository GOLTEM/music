import React, { useState, useCallback } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from 'react-dropzone'
import Tags from '../../components/tags/Tags';


function AddAlbum() {
    const [startDate, setStartDate] = useState(new Date());
    const [tracks, setTracks] = useState()
    const selectedTags = (tags) => {
        setTracks(tags)
    };
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (<DashboardLayout>
        <div className="flex flex-col w-full">
            <div className="w-full max-w-7xl">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="album">
                            Album name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="album" type="text" placeholder="Album name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="artist">
                            Artist
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="artist" type="text" placeholder="Artist" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="release_date">
                            Release Date
                        </label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="art">
                            Album Art
                        </label>
                        <div {...getRootProps()} className='grid items-center justify-center content-center md:h-40 h-28 border-2 bg-gray-100 p-2 text-center border-dashed border-gray-300 rounded md:w-2/3 w-full cursor-pointer'>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="tracks">
                            Album Tracks
                        </label>
                        <Tags
                            selectedTags={selectedTags}
                            className=""
                        />
                    </div>
                  

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Add Album
                        </a>
                    </div>
                </form>
            </div>

        </div>
    </DashboardLayout>);
}

export default AddAlbum;