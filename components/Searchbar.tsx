"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }: { otherClass: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="Magnifying glass"
      width={40}
      height={40}
    />
  </button>
);

const Searchbar = () => {
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearchPrams(model.toLowerCase(), manufacturer.toLowerCase());
    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }
  };
  const updateSearchPrams = (model: string, manufacturer: string) => {
    const searchPrams = new URLSearchParams(window.location.search);

    if (model) {
      searchPrams.set("model", model);
    } else {
      searchPrams.delete("model");
    }
    if (manufacturer) {
      searchPrams.set("manufacturer", manufacturer);
    } else {
      searchPrams.delete("manufacturer");
    }
    const newPath = router.push(
      `${window.location.pathname}?${searchPrams.toString()}`
    );
  };

  const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
      <SearchButton otherClass="sm:hidden" />
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model Icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          value={model}
          name="model"
          onChange={(e) => {
            setModel(e?.target.value);
          }}
          placeholder="Corolla"
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
