import React from "react";
import CardCenINLanding from "../../components/Cards/CardCenINLanding";
const CenINFeatures = () => {
  return (
    <main className=" p-4 ">
      <article className="  shadow-lg m-1 shadow-base-content lg:columns-2  p-3">
        <CardCenINLanding
          linkto="/2001"
          title="2001 Census"
          // image="https://res.cloudinary.com/dranaclni/image/upload/v1684675660/cenIN/2001_rujhgx.jpg"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684677076/cenIN/2001_bwtwwg.png"
          des="In the year 2001, the population of India was approximately 1.03 billion people. It was a significant milestone for India as it represented a substantial increase from previous decades."
        />
        <CardCenINLanding
          linkto="/worldvis"
          title="World Visualization"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684676483/cenIN/images_clm0tc.jpg"
          des="The world population in 2023 is estimated to be 8 billion, with Asia and Africa accounting for the majority of the growth.
 "
        />
        <CardCenINLanding
          linkto="/2011"
          title="2011 Census"
          // image="https://res.cloudinary.com/dranaclni/image/upload/v1684675660/cenIN/2001_rujhgx.jpg"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684677377/cenIN/2011_t2tfdi.png"
          des="In 2011, the population of India stood at around 1.21 billion people, making it the second most populous country in the world. "
        />
        <CardCenINLanding
          linkto="/preditive"
          title="Preditive Analytics"
          image="https://res.cloudinary.com/dranaclni/image/upload/v1684675973/cenIN/predictionAI_lftv56.webp"
          des="Predictive analytics for India's population suggests that it will continue to grow in the coming years. Factors such as high birth rates, improving healthcare, and increasing "
        />
      </article>
    </main>
  );
};

export default CenINFeatures;
