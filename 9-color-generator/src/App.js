import React, { useState } from "react";
import SingleColor from "./singlecolor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  // if invalid values passed to search color then error should generate
  const [error, setError] = useState(false);
  // app have some list of values that only should passed in search color bar
  // by default the below color will display
  // all(10): 10 shades and hex(rgb value ex:#fbcbbe) number of color both
  // 100/10 = shades control the amount of colors
  const [list, setList] = useState(new Values("#f15025").all(10));

  // (e) : event becoz onchange is used
  const handleSubmit = (e) => {
    // after refereshing app goes to default set work
    e.preventDefault();
    //  list will through error so put all the list code in try catch block

    try {
      // all(10): 10 shades and hex(rgb value ex:#fbcbbe) number of color both
      // 100/10 = shades
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      // seterror is ture : invalid num will display red border
      setError(true);
      //  if any invalid thin happen the error will display in console log
      console.log(error);
    }
  };

  return (
    // fregment :becoz there will be two sections
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            //  if the error is there then i want border red n if not no border dont add class
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {/*  color:name of color for every  item in my list  n index of list */}
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              // all the properties of item in list need  ...
              {...color}
              index={index}
              // take props :color.hex
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
