import React from "react";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import maire from "./maire.jpg";
import john from "./john.jpg";
import adam from "./adam.jpg";
function Team() {
  return (
    <div
      name="team"
      className=" py-[10%] px-[5%] lg:flex  bg-slate-300  gap-8 md:flex justify-center"
    >
      <div
        className="
        bg-slate-200
        lg:flex
        items-center
        mb-4
        rounded-xl
        max-w-l
        shadow-lg
        "
      >
        <div className="p-8">
          <img src={maire} alt="maire" width={150} className="rounded-lg" />
        </div>

        <div className="p-8">
          <div className=" text-xl font-medium text-sky-900 font-public">
            Máire P. Walsh
          </div>
          <p className="text-slate-500 ">Co-Founder & CEO Belayer</p>
          <div className="flex text-sky-900 gap-4 mt-1 mb-4 text-l">
            <a href="mailto:maire@belayer.co">
              <FaEnvelope className="hover:text-blue-500 text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/mairepwalsh/">
              <FaLinkedin className="hover:text-blue-500 text-xl" />
            </a>
            <a href="https://twitter.com/mairepwalsh">
              <FaTwitter className="hover:text-blue-500 text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="
        bg-slate-200
        lg:flex
        items-center
        rounded-xl
        max-w-l
        mb-4
        shadow-lg
       "
      >
        <div className="p-8">
          <img src={john} alt="john" width={150} className="rounded-lg" />
        </div>

        <div className="p-8">
          <div className=" text-xl font-medium text-sky-900 font-public">
            John Kenevey
          </div>
          <p className="text-slate-500 ">Co-Founder & Partner</p>
          <div className="flex text-sky-900 gap-4 mt-1 mb-4 text-l">
            <a href="mailto:johnk@belayer.co">
              <FaEnvelope className="hover:text-blue-500 text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/jkenevey/">
              <FaLinkedin className="hover:text-blue-500 text-xl " />
            </a>
            <a href="https://twitter.com/Kenevey">
              <FaTwitter className="hover:text-blue-500 text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="
        bg-slate-200
        lg:flex
        items-center
        rounded-xl
        max-w-l
        mb-4
        shadow-lg
        "
      >
        <div className="p-8">
          <img src={adam} alt="adam" width={150} className="rounded-lg " />
        </div>

        <div className="p-8">
          <div className=" text-xl font-medium text-sky-900">Adam Honan</div>
          <p className="text-slate-500">Co-Founder & Partner</p>
          <div className="flex text-sky-900 gap-4 mt-1 mb-4 text-l">
            <a href="mailto:info@belayer.co">
              <FaEnvelope className="hover:text-blue-500 text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/adam-honan-11925838/">
              <FaLinkedin className="hover:text-blue-500 text-xl" />
            </a>
            <a href="https://twitter.com/AdamHonan">
              <FaTwitter className="hover:text-blue-500 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
