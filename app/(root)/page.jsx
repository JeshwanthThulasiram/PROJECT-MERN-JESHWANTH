import { BikeCard, Hero, SearchBar } from "@/components";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Bike Catalogue</h1>
          <p>Explore out bikes you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="flex flex-wrap">
          <BikeCard
            name="Test"
            image="/testdw.png"
            modelYear="1969"
            cost="42069"
          />
          <BikeCard
            name="Test"
            image="/testdw.png"
            modelYear="1969"
            cost="42069"
          />
          <BikeCard
            name="Test"
            image="/testdw.png"
            modelYear="1969"
            cost="42069"
          />
          <BikeCard
            name="Test"
            image="/testdw.png"
            modelYear="1969"
            cost="42069"
          />
          <BikeCard
            name="Test"
            image="/testdw.png"
            modelYear="1969"
            cost="42069"
          />
          <BikeCard
            name="Test"
            image="/testdw.png"
            modelYear="1969"
            cost="42069"
          />
        </div>
      </div>
    </main>
  );
}
