import React from "react";
import bridge from "./bridge.jpg";
function Event() {
  return (
    <div className="p-2 md:mx-auto md:max-w-screen-xl font-public mt-8 mb-8 rounded-xl">
      <div className=" text-sky-800 p-2">
        <h1 className="md:text-6xl text-4xl">Events </h1>
      </div>
      <h2 className=" p-2 mt-12 text-2xl md:text-4xl text-[steelblue]">
        Belayer European Spotlight
      </h2>
      <p className="p-2 mb-6 text-gray-400">
        November 2nd at Ireland House at One Post St, San Francisco.
      </p>
      <div className="flex flex-col p-2  ">
        <img src={bridge} alt="sftech" width={500} className="" />
        <div className="">
          <p className=" pb-4 mt-2 md:text-xl font-light font-serif text-sky-900">
            Belayer in partnership with the European Commission is hosting an
            inaugural European Innovation Spotlight: Investor Panel + Pitch
            Competition for SFTechWeek on Wednesday, November 2nd at Ireland
            House at One Post St, San Francisco. This event will feature
            prominent Silicon Valley investors from Angels, Family Offices,
            Venture Capital, and Corporate Venture Capital who will share their
            knowledge and insights on how to navigate fundraising in uncertain
            times. In addition, the event will feature leading innovative
            European startups where they will do rapid pitches to a panel of
            judges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Event;
