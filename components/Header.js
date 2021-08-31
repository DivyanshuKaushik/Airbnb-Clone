import Image from 'next/image'
import { useState } from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {

    const router = useRouter()

    const [searchInput, setSearchInput] = useState("")

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const [noOfGuest, setNoOfGuest] = useState(1)

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const resetInput = ()=>{
        setSearchInput("")
    }

    const search = ()=>{
        router.push({
            pathname:"/search",
            query:{
                location:searchInput,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                noOfGuest
            }
        })
        resetInput()
    }
    
    return (
        <header className="sticky top-0 bg-white grid grid-cols-3 shadow-md p-4 md:px-8 z-50">
            {/* left section - logo */}
            <div onClick={()=>router.push('/')} className="relative flex items-center h-12 cursor-pointer">
                <Image src="https://links.papareact.com/qd3" alt="airbnb"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* middele - searchbar */}
            <div className="flex items-center rounded-full md:shadow-sm md:border lg:py-1.5">
                <input className="bg-transparent pl-4 outline-none flex-grow text-sm text-gray-700 placeholder-gray-400" type="text" placeholder={placeholder || "Start your Search"} value={searchInput} onChange={e => setSearchInput(e.target.value)} />
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

            {/* calender feature */}
            {searchInput &&
                <div className="flex flex-col col-span-3 mx-auto mt-2 ">
                    <DateRangePicker
                        className="scale-50 sc sm:scale-100 self-center"
                        ranges={[selectionRange]}
                        rangeColors={["#fd5b61"]}
                        minDate={new Date()}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-medium">Number of Guest</h2>
                        <UsersIcon className="h-5" />
                        <input type="number" className="w-12 pl-2 text-lg outline-none text-red-400"
                            value={noOfGuest}
                            onChange={e => setNoOfGuest(e.target.value)}
                            min={1}
                        />
                    </div>
                    <div className="flex">
                        <button className="flex-grow text-red-500" onClick={resetInput} >Cancel</button>
                        <button className="flex-grow text-red-500" onClick={search} >Search</button>
                    </div>
                </div>
            }

        </header>
    )
}

export default Header
