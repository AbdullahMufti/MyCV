import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const LeftSection: NextPage<Props> = ({}) => {
  return (
    <div>
      <p className="text-4xl font-bold">WORK EXPERIENCE</p>
      <hr className="block h-1 w-full bg-green-500" />
      <p className="text-2xl font-bold">MERN Stack Projects</p>
      <Link href="http://bulkypixels.co" className="text-green-900">
        Bulky Pixels
      </Link>
      <div className="flex flex-row justify-left">
        <div>&#128197; October 2019-Present</div>
        <div className="ml-9"> &#8982; Lahore</div>
      </div>
      <ul className="marker:text-black list-disc pl-5 space-y-3 text-black mt-5 text-justify">
        <li>Designed, developed, WordPress website https://auraqesabz.com</li>
        <li>
          Developed Learning Management System. This system include 3 Dashboards
          (Student,Teacher, and admin) along with a website
        </li>
        <li>
          Developed Query Management System. This system include 3 Dashboards
          (Questioner,Answer-er, and admin) along with a website
        </li>
        <li>
          Developed Employee Management System. This system include 5 Dashboards
          (Employee,Head of Department and admin,CEO,CFO)
        </li>
        <li>All three Management systems and updated regularly</li>
      </ul>
      <p className="text-2xl font-bold mt-7">
        Machine Learning & Other Projects
      </p>
      <div className="text-green-900 mt-5">FIVERR and UPWORK</div>
      <div className="flex flex-row justify-left">
        <div>&#128197; October 2022-Present</div>
        <div className="ml-9"> &#8982; Work from home</div>
      </div>
      <ul className="marker:text-black list-disc pl-5 space-y-3 text-black mt-5 text-justify">
        <li>Computer Vision model for Flower Recognition</li>
        <li>
          Developed Deep Learning Model for chess human/computer
          analyzer.ReactJS
        </li>
        <li>
          Developed multivariate Signal Processing Deep learning Model for
          popular word prediction for future{" "}
        </li>
        <li>
          Developed ElectronJS Desktop application for picture classi cation
        </li>
        <li>
          Developed Web Scraping in Javascript for a German Search Engine
          https://www.gelbeseiten.de/
        </li>
        <li>
          Trained(Python Tensorflow) and Developed Mamograph Cancer Detection
          (MERN Stack Application using TensorflowJS)
        </li>
      </ul>
      <p className="text-4xl font-bold">Certifications</p>
      <hr className="block h-1 w-full bg-green-500" />
      <ul className="marker:text-black list-disc pl-5 space-y-3 text-black mt-5 text-justify">
        <li>Digital Marketing (ERozgaar) (March 2020-May 2020)</li>
        <li>
          Artificial Intelligence and Computing•PIAIC (June 2020-Spetember 2022)
        </li>
        <li>Blockchain•PIAIC (In Progress)</li>
      </ul>
    </div>
  );
};

export default LeftSection;
