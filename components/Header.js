import Image from 'next/image'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 bg-white grid grid-cols-3 shadow-md p-4 md:px-8 z-50">
            {/* left section - logo */}
            <div className="relative flex items-center h-12 cursor-pointer">
                <Image src="https://links.papareact.com/qd3" alt="airbnb" 
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* middele - searchbar */}
            <div className="flex items-center rounded-full md:shadow-sm md:border-2 lg:py-1.5">
                <input className="bg-transparent pl-4 outline-none flex-grow text-sm text-gray-700 placeholder-gray-400" type="text" placeholder="Start your Search" />
                <SearchIcon className="h-8 hidden md:inline-flex bg-red-400 text-white rounded-full cursor-pointer p-2 md:mx-2" />
            </div>
            {/* right - menu */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer hover:bg-gray-100 p-2 rounded-full">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
