import { manufacturerBrands } from "@/constants/constants";
import { searchmanufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: searchmanufacturerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const finalManufacturer =
    searchQuery === ""
      ? manufacturerBrands
      : manufacturerBrands.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt=""
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Toyota"
            value={searchQuery} // Bind the value of the input to searchQuery
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchQuery("")}
          >
            <Combobox.Options>
              {finalManufacturer.length === 0 && searchQuery !== ""
                ? null
                : finalManufacturer.map((e) => (
                    <Combobox.Option
                      key={e} // Add a unique key to each option
                      value={e}
                      className={({ active }) =>
                        `${
                          active ? "bg-blue-500 text-white" : "text-black"
                        } search-manufacturer__option relative`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {e}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
