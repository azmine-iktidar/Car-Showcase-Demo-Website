import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars We Have</h1>
          <p className="text-lg mt-4">
            Discover the car of your dreams with our extensive catalogue!
          </p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
