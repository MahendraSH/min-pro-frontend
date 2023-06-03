import React from 'react'
import CardCenINLanding from "../../components/Cards/CardCenINLanding";
const CenINFeatures = () => {
  return (
    <main className=' p-4 '>
      <article className="  shadow-lg m-1 shadow-base-content lg:columns-2  p-3">
        <CardCenINLanding
          linkto="/2001"
          title="2001 Census"
          // image="https://res.cloudinary.com/dranaclni/image/upload/v1684675660/cenIN/2001_rujhgx.jpg"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684677076/cenIN/2001_bwtwwg.png"
        />
        <CardCenINLanding
          linkto="/worldvis"
          title="World Visualization"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684676483/cenIN/images_clm0tc.jpg"
        />
        <CardCenINLanding
          linkto="/2011"
          title="2011 Census"
          // image="https://res.cloudinary.com/dranaclni/image/upload/v1684675660/cenIN/2001_rujhgx.jpg"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684677377/cenIN/2011_t2tfdi.png"
        />
        <CardCenINLanding
          linkto="/preditive"
          title="Preditive Analytics"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684675973/cenIN/predictionAI_lftv56.webp"
        />
      </article>
    </main>
  );
}

export default CenINFeatures
