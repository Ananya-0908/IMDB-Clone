"use client";
import React,  { useState, useEffect } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mount, setMount] = useState(false);
    const currenttheme = theme === "system" ? systemTheme : theme;
    useEffect(() => setMount(true), []);
    return (
      <>
        {mount && currenttheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer  hover:text-amber-500"
          />
        ) : (
          <BsFillMoonStarsFill
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        )}
      </>
    );
  };
  
  export default DarkMode;