"use client";
import Link from "next/link";
import React from "react";
import Theme from "../molecules/Theme";
import AvatarMenuDropDown from "../molecules/AvatarMenuDropDown";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      collapseButton
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>

        {/* THEME MENU LIGHT & DARK MODE*/}
        <Theme />

        {/* AVATAR DROPDOWN USER MENU */}
        <AvatarMenuDropDown />
      </div>
    </nav>
  );
};

export default Navbar;
