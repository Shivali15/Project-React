import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

//toggle btn : readmore / readless in paragraph

// `${info}` : this is called template string

/* 
<p>{readmore ? info : `${info.substring(0, 200)}...`}</p>;


if the readmore is true  then display full info 

if not then display info in limit of 200 characters only 




<button onClick={()=>setReadmore(!readmore)}>
        {readmore? 'show less ':'read more'}
</button>


on clicking  the value od setReadmore will get opposite (!readmore)  
agar true hai toh by clicking false hoga 
agar false hai toh by clicking true hoga  


 {readmore? 'show less ':'read more'}
 checking value of readmore  if it is true then button name will 'show less'
 checking value of readmore  if it is false then button name will 'read more'

*/
