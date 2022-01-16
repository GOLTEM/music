import React from 'react'
import { SearchIcon, MenuAlt2Icon } from '@heroicons/react/outline'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const music_genres = [
    { name: 'albums', location: '/albums' },
    { name: 'singles', location: '/singles' },
    // { name: 'videos', location: '/videos' },
    { name: 'ep', location: '/eps' },
    { name: 'news', location: '/news' },
    { name: 'more', location: '/more' },
]

function Navbar() {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <nav className='flex flex-row items-center lg:px-0 md:px-16 px-8 justify-between h-16 max-w-7xl mx-auto '>
            <div onClick={()=> navigate('/')} className="font-semibold uppercase overflow-hidden cursor-pointer">
                <img src={logo} alt="logo for navbar of mp3afrojam" className='md:h-16 h-8 object-contain' />
            </div>
            <div className="flex gap-8 md:flex flex-row items-center hidden">
                {
                    music_genres?.map((genre, index) => (
                        <div key={index} onClick={()=> navigate(genre.location)} className="uppercase cursor-pointer text-gray-700 font-semibold">{genre.name}</div>
                    ))
                }
            </div>
            <div className=" flex">
                <span onClick={onOpen} className='p-2 hover:bg-gray-100 rounded-full cursor-pointer'>
                    <SearchIcon height={16} width={16} className='text-gray-700' />
                </span>
                <Modal isOpen={isOpen} onClose={onClose} className="rounded-full" size={'xl'}>
                    <ModalOverlay />
                    <ModalContent className="rounded-full">
                        <ModalBody className='flex flex-row items-center'>
                            <input type="text" className='border-none p-2 outline-none flex-1' placeholder='Search name, artist, song ...' />
                            <span className='p-2 hover:bg-gray-100 rounded-full cursor-pointer'>
                                <SearchIcon height={16} width={16} className='text-gray-700' />
                            </span>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                <span className='md:hidden flex flex-col ml-2'>
                    <Menu size={'sm'} >
                        <MenuButton as={Button} className='bg-white'>
                            <span className='p-1'>
                                <MenuAlt2Icon height={16} width={16} className='text-gray-700' />
                            </span>
                        </MenuButton>
                        <MenuList>
                            {

                                music_genres?.map((genre, index) => (
                                    <MenuItem key={index} className='text-sm text-gray-700 uppercase'>{genre.name}</MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                </span>

            </div>
        </nav>
    )
}

export default Navbar
