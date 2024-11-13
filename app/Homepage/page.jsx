import React from "react";
import Hero from "../../components/Homepage/Hero";

import What from "../../components/Homepage/What";
import Explore from "../../components/Homepage/Explore";

import Commitment from "../../components/Homepage/Commitment";
import Gallery from "../../components/Homepage/Gallery";

const page = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <What />
      <Commitment />
      <Gallery />
    </div>
  );
};

export default page;
