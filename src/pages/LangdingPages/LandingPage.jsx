import React, { Suspense } from "react";
import CardOverlay from "../../components/Cards/CardOverlay";
import Herosection from "../../components/Herosection";
import CenINFeatures from "../CenIN/CenINFeatures.jsx";
// import data from "../../data/home/homeLading.json";
const LandingPage = () => {
  // const { some } = JSON.parse(JSON.stringify(data));
  const MainheroContent = {
    subheading: `
            DATA IS THE OIL OF THE 21ST CENTURY AND DATA ANALYTICS IS THE COMBUSTION ENGINE`,
    para: `   The largest administrative and statistical exercise in the world,
            counting over 1.3 billion people.The Indian Census aims to provide a
            reliable snapshot of the country's population, its diversity, and
            socio-economic characteristics.`,
  };
  return (
    <section>
      <article className="pb-4">
        <Herosection data={MainheroContent} />
      </article>
      <CenINFeatures />
      {/* <article className="lg:columns-3 xl:columns-3 md:columns-2 sm: columns-1 "> */}
        {/* <CardOverlay />
        <CardOverlay />
        <CardOverlay />
        <CardOverlay />
        <CardOverlay />
        <CardOverlay /> */}
        {/* {some.map((item, index) => {
          return <CardOverlay key={index} {...item} />;
        })} */}
        
        <Suspense fallback={<div>Loading...</div>}>

        <CardOverlay />
        </Suspense>
      {/* </article> */}
    </section>
  );
};

export default LandingPage;
