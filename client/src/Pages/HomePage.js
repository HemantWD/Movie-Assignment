import React from "react";
import { SearchBar } from "../Components/SearchBar";
import { List } from "./List";

export const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <List />
    </div>
  );
};
