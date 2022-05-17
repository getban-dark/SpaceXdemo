import React from "react";

import { VscRocket } from "react-icons/vsc";
import { GiDefenseSatellite, GiRocketThruster, GiUfo } from "react-icons/gi";
import AboutCard from "./AboutCard";

const Vehicals = () => {
  return (
    <div name="about" className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">A private spaceflight company</h1>
          <p className="py-4 text-xl">
            You want to wake up in the morning and think the future is going to
            be great - and that's what being a spacefaring civilization is all
            about.
          </p>

          {/* 4 Container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card */}
            <AboutCard
              icon={<VscRocket size={40} />}
              heading="Falcon 9"
              text="Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world's first orbital class reusable rocket."
            />

            <AboutCard
              icon={<GiRocketThruster size={40} />}
              heading="Falcon Heavy"
              text="Falcon Heavy is the world's most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb) Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy."
            />
            <AboutCard
              icon={<GiUfo size={40} />}
              heading="Dragon"
              text="
              The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth.
              "
            />
            <AboutCard
              icon={<GiDefenseSatellite size={40} />}
              heading="Starship SN15"
              text="
              SpaceX's Starship spacecraft and Super Heavy rocket represent a fully reusable transportation system.Starship will be the world's most powerful launch vehicle with the ability to carry 100 metric tonnes to Earth orbit.
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicals;
