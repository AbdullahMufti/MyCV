import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const TopSection: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-row flex-wrap-reverse justify-between">
      <div className="text-center md:text-left w-full md:w-2/3">
        <div className="text-4xl  font-bold  ">ABDULLAH MUFTI</div>
        <div className="text-3xl font-semibold text-green-500 ">
          MERN STACK DEVELOPER
        </div>
        <div className="flex flex-row justify-evenly flex-wrap m-5 w-full md:w-auto">
          <Link href="mailto:abdullahmufty@gmail.com" target="new">
            <Image
              className="inline"
              src="email.svg"
              width="25"
              height="25"
              alt="email"
            />
          </Link>
          <Link
            href="https://web.whatsapp.com/send?phone=+9232200000&"
            target="new"
          >
            <Image
              className="inline"
              src="whatsapp.svg"
              width="25"
              height="25"
              alt="mobile"
            />
          </Link>
          <Link href="https://goo.gl/maps/zoRjLvGp9dxfKHYK9" target="new">
            <Image
              className="inline"
              src="location.svg"
              width="25"
              height="25"
              alt="location"
            />
          </Link>
          <Link href="https://github.com/AbdullahMufti" target="new">
            <Image
              className="inline"
              src="github.svg"
              width="25"
              height="25"
              alt="github"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdullah-mufti-a3a75b1a8/"
            target="new"
          >
            <Image
              className="inline"
              src="linkedin.svg"
              width="25"
              height="25"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full md:w-1/3">
        <Image
          src="/mypic.jpeg"
          width="170"
          height="120"
          alt="Profile picutre"
        />
      </div>
    </div>
  );
};

export default TopSection;
