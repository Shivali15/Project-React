import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  // useeffect will work when are index changes or when people array changes
  useEffect(() => {
    // look for last index
    // check if index is negative
    // then set index to last index of people array
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    // index is bigger then lastindex
    // then set again the index to 0
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // auto slider effect
  // automatically the silder will display after some time
  //  in 5sec once the index changes i want a see the next slide
  useEffect(() => {
    let slider = setInterval(() => {
      //  going in straightward direction then set :index+1
      setIndex(index + 1);
      // going in opposite direction so set: index -1
      // setIndex(index - 1);
    }, 5000);
    // how long it will run that will run 5 sec
    return () => {
      // when i again set interval then i want to clear previous slider clear
      clearInterval(slider);
    };
    // every time my index will change i want setinterval
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          // if person index match with index then will change the position
          if (personIndex === index) {
            // active slide means that will we at center
            //  and all remaining slide will hide
            position = "activeSlide";
          }
          // we will look for person who having negative index  0-1 =-1
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        {/* for previous slide index value decreases */}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        {/* for next slide the index value increases */}
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
