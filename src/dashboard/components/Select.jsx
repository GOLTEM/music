import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Select({ title }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    return (
        <div className="z-30 outline-none">
            <Menu as="div" className="relative outline-none inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex outline-none justify-center w-full px-4 py-2 text-sm font-medium ">
                        {title}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-30 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <button onClick={() => navigate('/rent')} className={`${'hover:bg-gray-100 text-gray-900 '} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                    Switch to buying
                                </button>
                            </Menu.Item>
                            <div className="border-b border-gray-200 my-2"></div>
                            <Menu.Item>
                                <button onClick={logout} className={`${'hover:bg-gray-100 text-gray-900 '} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                    Logout
                                </button>
                            </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}