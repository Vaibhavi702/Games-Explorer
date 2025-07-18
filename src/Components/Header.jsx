import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { CiSun, CiSearch } from "react-icons/ci";
import icon from "../assets/icon.png";
import useTheme from "../context/theme";

function Header({ setFilteredGames }) {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-md">
      <img
        src={icon}
        className="h-12 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
        alt="Logo"
      />

      <div className="relative w-full max-w-lg">
        <div className="flex items-center bg-slate-200 dark:bg-gray-800 p-3 rounded-full shadow-inner">
          <CiSearch className="text-gray-600 dark:text-gray-300 text-xl mx-2" />
          <input
            className="w-full outline-none bg-transparent dark:text-white dark:placeholder-gray-400 px-2"
            type="text"
            placeholder="Search Games"
          />
        </div>
      </div>

      <button
        onClick={onChangeBtn}
        className="text-[28px] bg-slate-200 dark:bg-gray-700 p-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-slate-300 dark:hover:bg-gray-600"
      >
        {themeMode === "light" ? (
          <FaMoon className="text-gray-900" />
        ) : (
          <CiSun className="text-yellow-400" />
        )}
      </button>
    </div>
  );
}

export default Header;
