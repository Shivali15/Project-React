import React, { useState } from "react";
import data from "./data";
function App() {
  // how many para we want that will set in count variable
  const [count, setCount] = useState(0);
  // array of those paragraph
  const [text, setText] = useState([]);

  //  handlesubmit function is going to call in onclick  so passing e :event as parameter
  const handleSubmit = (e) => {
    // after refresh the page must in  default working
    e.preventDefault();
    // parseInt : in count ther will always be number
    // amount variable : will decide how many no.of para should display
    let amount = parseInt(count);

    if (count <= 0) {
      // display only 1 para
      amount = 1;
    }
    // fake value 15 is set
    if (count > 15) {
      // i having only 12 para in data file
      amount = 12;
    }
    // slice will return newcopy array
    // slice(0) : selecting start of the array
    //  slice (0,amount) : amount will be end upto which para should display
    // amount : end value upto that the para will display
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        {/* label  having the id :amount */}
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          // want to change values of count :means no.of para
          value={count}
          // as we change values ,then count will also in my state
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {/* create paragragh for each item in array */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
