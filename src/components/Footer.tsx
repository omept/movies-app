import Image from "next/image";
import Link from "next/link";
import logo from "../assets/HUB.png";

const Footer = () => {
  return (
    <div className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          About us{" "}
          <span className="w-16 h-1 bg-purple-700 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={100}
            priority={true}
            className="cursor-pointer w-40 h-auto"
          />
        </Link>
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          Browse Latest Movies and shows!
        </p>
      </div>
      <div className="mx-auto">
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Contact
          <span className="w-16 h-1 bg-purple-700 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <div className="text-gray-300 text-sm flex flex-col gap-2">
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/2348179319079"
              target="_blank"
              className="text-white font-medium"
            >
              https://wa.me/2348179319079
            </a>
          </p>
          <p>
            Email:{" "}
            <span className="text-white font-medium">
              georgetheprogrammer@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
