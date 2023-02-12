import React from "react";

import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import belayerlogo from "./belayerlogo.png";
function Footer() {
  return (
    <div className="p-1 h-full bg-blue-900 text-blue-200 text-light lg:w-full text-left lg:pl-[18%]">
      <div className="mt-[8%]">
        <img
          src={belayerlogo}
          className="brightness-200"
          alt="logo"
          width={160}
        />
      </div>
      <div className="flex pl-1 mt-4 text-blue-200">
        <a className="contact" href="mailto:info@belayer.co">
          <FaEnvelope className="w-5 text-3xl mr-4 hover:text-blue-400" />
        </a>
        <a
          className="contact"
          href="https://www.linkedin.com/company/belayeravf/"
        >
          <FaLinkedin className="w-5 text-3xl mr-4 hover:text-blue-400" />
        </a>
        <a className="contact" href="https://twitter.com/belayerAVF">
          <FaTwitter className="w-5 text-3xl mr-4 hover:text-blue-400" />
        </a>
      </div>

      <div className=" mt-4 border-t-2 border-white border-opacity-50 pt-12 md:w-[85%] pb-10 ">
        &copy;{new Date().getFullYear()} Belayer - All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
