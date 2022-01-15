import React from 'react'
import { SearchIcon, MenuAlt2Icon, ChevronDownIcon } from '@heroicons/react/outline'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

const music_genres = [
    { name: 'albums' },
    { name: 'singles' },
    { name: 'vidoes' },
    { name: 'ep' },
    { name: 'news' },
    { name: 'more' },
]

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <nav className='flex flex-row items-center md:px-16 px-8 justify-between h-16 '>
            <div className="font-semibold uppercase">
                mp3AfroJam
            </div>
            <div className="flex gap-8 md:flex flex-row items-center hidden">
                {
                    music_genres?.map((genre, index) => (
                        <div key={index} className="uppercase cursor-pointer text-gray-700 font-semibold">{genre.name}</div>
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
