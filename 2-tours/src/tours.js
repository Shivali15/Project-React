import React from "react";
// import tour from "./tour";
import Tour from "./tour";

const tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // ...tour means in Tour component i'll have access to all properties in my objects
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default tours;
