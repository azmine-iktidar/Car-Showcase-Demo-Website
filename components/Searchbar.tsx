"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const Searchbar = () => {
  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default Searchbar;
