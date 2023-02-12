import React from "react";

function Hero() {
  return (
    <div
      name="home"
      className=" w-full h-96 lg:px-[14%] md:px-[12%] p-4 md:pb-44 md:h-3/4 md:pt-16 items-center bg-blue-500 text-white"
    >
      <div className="flex flex-col justify-center md:items-start px-2 py-8">
        <p className="text-4xl font-public md:text-6xl ">
          Building the bridge <br />
          between
          <span className="font-bold">
            {""}{" "}
            <span className="text-gray-300">
              {" "}
              US capital <br />
              and European
            </span>{" "}
            startups.
          </span>
        </p>

        <a
          href="mailto:info@belayer.co"
          className="px-1 py-2 hover:text-blue-200 hover:bg-blue-700 transition-colors duration-500 no-underline text-center rounded bg-blue-600  w-[45%] lg:w-[15%] my-8 sm:w-[30%]"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
}

export default Hero;
