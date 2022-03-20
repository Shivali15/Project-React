import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  //   set  values
  const [showInfo, setshowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setshowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

/*
1 showinfo is true then only display my paragraph


{
  showInfo && <p>{info}</p>;
}



2 if showinfo is true then go with - minus icon 
if showinfo is false then go with  + plus


            {showInfo ? <AiOutlineMinus/> :<AiOutlinePlus/>}

*/
