import React from 'react'
import Navbar from '../components/navigation/Navbar'

function GeneralLayout({children}) {
    return (
        <div className='flex flex-col bg-gray-50 min-h-screen'>
            <div className="nav">
                <Navbar />
            </div>
            <div className="bod md:p-16 p-4">
                {children}
            </div>
        </div>
    )
}

export default GeneralLayout
