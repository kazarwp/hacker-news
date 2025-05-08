'use client'

import Image from "next/image";
import hacker from "../../public/hacker.png";
import { useEffect } from "react";
import { getFreshNews } from "../utils/api/getFreshNews";

export const Header = () => {

  useEffect(() => {
    console.log(getFreshNews())
    getFreshNews()
  }, [])

  return (
    <div className="w-full flex gap-3 m-0 p-0 justify-center items-center bg-white">
      <Image src={hacker} alt="Лого" className="w-20 h-20" />
      <p className="text-3xl text-black font-semibold ">Hacker News</p>
    </div>
  );
};
