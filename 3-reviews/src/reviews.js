import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // my index
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  //   after completing arrray at the end of array n then do next one
  // then it will go to 1st person
  // or in 1st one doning previous one then
  // it will go back to last person
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  //<FaChevronright  functioning
  const nextPerson = () => {
    setindex((index) => {
      let newindex = index + 1;
      return checkNumber(newindex);
    });
  };
  //   <FaChevronLeft  functioning

  const prevPerson = () => {
    setindex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  };

  //surprise button functioning
  const randomPerson = () => {
    let randomnumber = Math.floor(Math.random() * people.length);
    if (randomnumber == index) {
      randomnumber = index + 1;
    }

    setindex(checkNumber(randomnumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
