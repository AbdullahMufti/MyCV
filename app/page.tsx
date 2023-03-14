import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import TopSection from "./TopSection";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} m-auto flex justify-center items-center `}
    >
      <div className=" max-w-6xl my-5 mx-5 py-5 px-5 border bg-gray-200 shadow-lg shadow-gray-500/50 flex-1 relative">
        <TopSection />
        <div className="w-full mt-5 pt-5 flex flex-wrap">
          <div className="w-full md:w-2/3 px-5">
            <LeftSection />
          </div>
          <div className="w-full md:w-1/3 px-5">
            <RightSection />
          </div>
        </div>
      </div>
    </main>
  );
}
