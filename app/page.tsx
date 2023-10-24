import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import { fuels, yearsOfProduction } from "@/constants/constants";
import Image from "next/image";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { HomeProps } from "@/types";
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <div className="home__cars-wrapper">
            {allCars?.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </div>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
