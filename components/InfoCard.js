import { StarIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"

function InfoCard({ data }) {

    const { img, location, title, description, star, price, total } = data

    return (
        <div className="flex w-full lg:w-3/5 pl-2 pr-4 py-6 border-b rounded-xl cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t" >
            <div className="relative h-32 w-40 sm:h-48 sm:w-60 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between" >
                    <p className="text- text-gray-800 flex-grow">{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-gray-500 text-sm flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                    <StarIcon className='text-red-400 h-5' />
                    {star}
                    </p>
                    <div className="">
                        <p className="text-lg font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
