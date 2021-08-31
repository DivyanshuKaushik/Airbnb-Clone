import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from 'date-fns'
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {

    const router = useRouter()

    const {location,startDate,endDate,noOfGuest} = router.query

    const formatedStartDate = format(new Date(startDate),"dd MMMM yy")
    const formatedEndDate = format(new Date(endDate),"dd MMMM yy")
    const range = `${formatedStartDate} - ${formatedEndDate}`

    return (
        <>
        <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - {noOfGuest} Guest</p>
                    <h1 className="text-3xl mt-2 mb-4">Stays In {location}</h1>
                    <div className="flex flex-wrap mb-4">
                        <p className="search-filter">Cancellation Flexibility</p>
                        <p className="search-filter">Type of Place</p>
                        <p className="search-filter">Price</p>
                        <p className="search-filter">Rooms and Beds</p>
                        <p className="search-filter">More Filters</p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map((item,index)=>
                           <InfoCard key={index} data={item} />
                        )}
                    </div>
                </section>
            </main>
        <Footer />
        </>
    )
}

export default Search

export async function getServerSideProps(){

    const searchResults = await fetch("https://links.papareact.com/isz").then(res=>res.json())

    return {
        props:{
            searchResults
        }
    }
}
