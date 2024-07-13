"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/providers/search-provider";
import { PlacePicker } from "@googlemaps/extended-component-library/react";
import "./search.css";

export default function Search({
  placeholder,
  link = false,
}: {
  placeholder: string;
  link?: boolean;
}) {
  const { addSearch } = useSearch();
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value?.formattedAddress ?? "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addSearch(inputValue);
      setInputValue("");
      if (link) {
        router.push("/map");
      }
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="placepicker-container">
        <PlacePicker placeholder={placeholder} onPlaceChange={handleChange} />
      </div>
      <button type="submit" className="search-button" disabled={!inputValue}>
        Search
      </button>
    </form>
  );
}
