import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const RightSection: NextPage<Props> = ({}) => {
  return (
    <div>
      <p className="text-4xl font-bold">EDUCATION</p>
      <hr className="block h-1 w-full bg-green-500" />
      <div className="my-5">
        <p className="text-md ">M.Sc</p>
        <p className="text-md font-bold">Computer Science</p>
        <p className=" text-green-900 text-md font-bold">
          BARANI INSTITUTE OF IT
        </p>
        <p className="text-md">Computer Science</p>
        <p className="text-md">&#128197; Feburary 2016 - Feburary 2018</p>
        <p className="text-md">&#8982; RAWALPINDI, PAKISTAN</p>
      </div>
      <div className="my-5">
        <p className="text-md">MS</p>
        <p className="text-md font-bold">CHEMICAL ENGINEERING</p>
        <p className=" text-green-900 text-md font-bold">PIEAS</p>
        <p className="text-md">&#128197; September 2011 - October 2013</p>
        <p className="text-md">&#8982; ISLAMABAD, PAKISTAN</p>
      </div>

      <p className="text-4xl font-bold">SKILLS</p>
      <hr className="block h-1 w-full bg-green-500" />
      <p className=" text-green-900 text-md font-bold uppercase">
        Technologies Experienced with
      </p>
      <ul className="marker:text-black list-disc pl-5 space-y-3 text-black mt-5 text-justify">
        <li>React JS</li>
        <li>Next JS</li>
        <li>Wordpress</li>
        <li>vanlina HTML, JS, and CSS</li>
        <li>Node JS with Express</li>
        <li>Tailwind CSS</li>
        <li>Web Scrapping (Puppeteer JS)</li>
        <li>Web Scrapping (BeautifulSoap)</li>
        <li>Electron JS</li>
        <li>Tensorflow(Training) </li>
        <li>Tensorflow in Production(Tflite Tfjs)</li>
        <li>Scheduling Emails SMTP cron jobs</li>
        <li>Paypro Payment integration with MERN Stack Application</li>
      </ul>
    </div>
  );
};

export default RightSection;
