import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="focus:bg-transparent">
      <Head>
        <title>Airbnb Clone | Divyanshu Kaushik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="w-11/12 md:w-4/5 mx-auto p-4 md:p-8">

        <section className="my-6" >
          <h2 className="text-3xl text-gray-900 font-semibold my-3">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item, index) =>
              <SmallCard key={index} img={item.img} location={item.location} distance={item.distance} />
            )}
          </div>
        </section>

        <section className="my-6" >
          <h2 className="text-3xl text-gray-900 font-semibold my-3">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-auto overflow-scroll scrollbar-hide p-2">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" 
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) => res.json());
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
