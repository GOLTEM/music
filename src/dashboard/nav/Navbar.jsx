import React from 'react'
import { MenuAlt1Icon, ChevronDownIcon, DatabaseIcon } from '@heroicons/react/outline'
import Select from '../components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { turnoff_sidebar, turnon_sidebar } from '../../redux/actions/viewActions';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const dashboard_view = useSelector(state => state.sidebar_view)
    const { view } = dashboard_view
    const userSignin = useSelector(state => state.userSIgnIn)
    const { userInfo } = userSignin
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const setMobileSidebar = (e) => {
        e.preventDefault()
        view === 'off' ? dispatch(turnon_sidebar()) : dispatch(turnoff_sidebar())
    }

    return (
        <nav className="transition duration-500 ease-in-out py-4 md:px-8 px-4 flex flex-row items-center">
            <div onClick={setMobileSidebar} className="search md:hidden flex bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                <MenuAlt1Icon height={20} width={20} />
            </div>
            <div onClick={setMobileSidebar} className="search md:flex hidden bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                <MenuAlt1Icon height={20} width={20} />
            </div>
            <span onClick={() => navigate('/buy')} className="ml-4 text-sm flex bg-white p-3 cursor-pointer hover:bg-gray-200 rounded-lg">exit</span>

            <div className="flex-grow"></div>
            <span className="bg-white p-3 rounded mx-2">
                <DatabaseIcon height={20} width={20} fontSize="small" className="text-gray-700" />
            </span>
            <Select
                title={(<span className="flex flex-row items-center cursor-pointer outline-none">
                    <span className="bg-blue-300 p-3 rounded mx-2">
                        <p className="text-gray-700 text-sm">AD</p>
                    </span>
                    <div className="p-3 rounded ml-2 md:flex hidden flex-col">
                        <p className="text-gray-800 text-left font-semibold">{userInfo?.user.username}</p>
                        <p className="text-xs text-gray-500">{userInfo?.user.email}</p>
                    </div>
                    <ChevronDownIcon height={16} width={16} />
                </span>)}
            />
        </nav>

    )
}

export default Navbar