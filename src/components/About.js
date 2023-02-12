import React from "react";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
function About() {
  return (
    <div
      name="about"
      class=" p-4 md:flex-row flex  flex-col h-max-screen bg-blue-600 text-blue-100 md:p-12"
    >
      <div className="font-public md:w-[55%] text-left text-4xl p-12  pl-0 h-full flex md:items-center md:justify-center md:text-7xl">
        About
      </div>
      <div className="md:w-[80%] md:pr-[14%] flex items-center justify-center text-xl font-light  ">
        <p>
          The mission of Belayer is to connect knowledge, network, and capital
          to European startups so they can scale globally.
          <p>
            <br />
            The journey began when Máire, John and Adam began investing as a
            collective in Irish startups. They uncovered some major pain points,
            in particular for European startups, as they sought funding to scale
            their businesses. While we have moved to a “remote-first” world, it
            was clear that without a presence, knowledge and network in the
            Silicon Valley and beyond, entrepreneurs faced many challenges while
            seeking funding rounds.
          </p>
          <br />
          <p>
            Belayer was founded to help overcome these challenges, to highlight
            often overlooked European startups to investors and key stakeholders
            who seek high quality deal flow but are often deterred because of
            the
            <i>&ldquo;closed loop&ldquo;</i> that encapsulates many Valley, and
            other deals. Our mission is to open up investment opportunities in
            scaling startups to other asset classes and to equip the leaders of
            tomorrow with the knowledge and talent that will propel them and
            their partners success.
            <div></div>
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
