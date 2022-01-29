import React from 'react'
import { ClipboardListIcon, ChevronDoubleLeftIcon, XIcon, UserCircleIcon, TemplateIcon, MusicNoteIcon, CollectionIcon } from '@heroicons/react/outline'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { turnoff_sidebar, turnon_sidebar } from '../../redux/actions/viewActions'

function Sidebar() {

    const location = useLocation()
    const navigate = useNavigate()
    const dashboard_view = useSelector(state => state.sidebar_view)
    const { view } = dashboard_view
    const dispatch = useDispatch()

    const setMobileSidebar = (e) => {
        e.preventDefault()
        view === 'off' ? dispatch(turnon_sidebar()) : dispatch(turnoff_sidebar())
    }

    const sidebar_links = [
        {
            title: "Dashboard",
            location: "/dashboard/home",
            icon: <TemplateIcon  height={24} width={24} className="text-gray-700" />,
            id: 'asfklj88'
        },
        {
            title: "Albums",
            location: "/manage-albums",
            icon: <ClipboardListIcon height={24} width={24} className="text-gray-700" />,
            id: '2kalsjf09'
        },
        {
            title: "Singles",
            location: "/manage-singles",
            icon: <MusicNoteIcon height={24} width={24} className="text-gray-700" />,
            id: '3dklsaj;'
        },
        {
            title: "EPs",
            location: "/manage-eps",
            icon: <CollectionIcon height={24} width={24} className="text-gray-700" />,
            id: 'asljfkli4',
            id2: 'asasd89ljfkli4'
        }
    ]

    return (
        <div className="z-50 transition duration-500 ease-in-out bg-white">
            <div className="transition duration-500 ease-in-out flex flex-col">
                <span onClick={setMobileSidebar} className="md:hidden flex flex-row items-center justify-between p-2 m-2 rounded-lg">
                    <ChevronDoubleLeftIcon height={24} width={24} className="text-gray-700" />
                    <XIcon height={24} width={24} className="text-gray-700" />
                </span>
                <div onClick={()=> navigate('/rent')} className="top flex flex-col cursor-pointer items-center px-8 py-16">
                    {/* <img src={logo} alt='default logo' className="w-32" /> */}
                    logo
                </div>
                <div className="links">
                    {
                        sidebar_links.map(option => (
                            <div key={option.id}>
                                <span
                                    key={option.id}
                                    onClick={() => {
                                        navigate(`${option.location}`)
                                    }}
                                    className={`${option.location === location.pathname ? "border-r-4 border-blue-600 text-blue-600 " : "border-none text-gray-700 "} transition duration-500 ease-in-out  p-3 hover:bg-gray-100 cursor-pointer font-semibold md:hidden flex flex-row items-center`}>
                                    {option.icon}
                                    <p className="ml-2">{option.title}</p>
                                </span>
                                <span
                                    key={option.title}
                                    onClick={() => {
                                        navigate(`${option.location}`)
                                    }}
                                    className={`${option.location === location.pathname ? "border-r-4 border-blue-600 text-blue-600 " : "border-none text-gray-700 "} transition duration-500 ease-in-out  p-3 hover:bg-gray-100 cursor-pointer font-semibold md:flex hidden flex-row items-center`}>
                                    {option.icon}
                                    <p className="ml-2">{option.title}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar