import React from 'react'
import Navbar from '../components/navigation/Navbar'
import { Helmet } from "react-helmet"

function GeneralLayout({ children, heading, description }) {
    return (
        <div>
            <Helmet>
                {
                    heading ? <title>{heading}</title> : <title>mp3AfroJam</title>
                }
                {
                    description ? <meta name="description" content={description} /> :
                        <meta name="description" content="Site to Download mp3 song, Naija Music, New South African Music, Afrobeats, Hip Hop Tune, Albums, Singles" />
                }
            </Helmet>
            <div className='flex flex-col bg-gray-50 min-h-screen'>
                <div className="nav">
                    <Navbar />
                </div>
                <div className="bod md:p-16 p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default GeneralLayout
