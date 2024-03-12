import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-slate-700 bg-amber-200 lg:text-lg p-4">
      <NavbarItem title={"Trending"} param="fetchTrending" />
      <NavbarItem title={"Top Rated"} param="fetchTopRated" />
    </div>
  );
};

export default Navbar;