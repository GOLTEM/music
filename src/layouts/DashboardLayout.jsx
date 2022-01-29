import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from '../dashboard/nav/Sidebar'
import { MenuAlt1Icon, ChevronDownIcon, DatabaseIcon } from '@heroicons/react/outline'
import { turnoff_sidebar, turnon_sidebar } from '../redux/actions/viewActions'

function DashboardLayout({ children }) {
    const dashboard_view = useSelector(state => state.sidebar_view)
    const { view } = dashboard_view
    const dispatch = useDispatch()

    const setMobileSidebar = (e) => {
        e.preventDefault()
        view === 'off' ? dispatch(turnon_sidebar()) : dispatch(turnoff_sidebar())
    }

    return (
        <div className={`${view === "on" ? " grid-cols-6 " : "grid-cols-1 "} md:static absolute bg-gray-100 min-h-screen grid w-full`}>
            <div className={`${view === "on" ? "w-5/6 " : "hidden"} z-40 transition duration-500 ease-in-out col-span-1 h-full bg-white top-0 left-0 md:static absolute md:w-full`}>
                <Sidebar />
            </div>
            <div className={`z-10 transition duration-500 ease-in-out col-span-5 flex flex-col w-full`}>
                {/* <Navbar />   */}
                <div className="transition duration-500 ease-in-out py-4 md:px-8 px-4 flex flex-row items-center">
                    <div onClick={setMobileSidebar} className="search md:hidden flex bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                        <MenuAlt1Icon height={20} width={20} className="text-gray-700" />
                    </div>
                    <div onClick={setMobileSidebar} className="search md:flex hidden bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                        <MenuAlt1Icon height={20} width={20} className="text-gray-700" />
                    </div>
                </div>
                <div className="mainbody md:px-8 px-4 ">{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout