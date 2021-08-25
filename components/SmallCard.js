import Image from "next/image"

export default function SmallCard({ img, location, distance }) {
    return (
        <div className="w-60 flex space-x-4 items-center m-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-16 w-16">
                <Image src={img} alt={location} className="rounded-lg" layout="fill" objectFit="contain"/>
            </div>
            <div className="">
                <h2 className="">{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}