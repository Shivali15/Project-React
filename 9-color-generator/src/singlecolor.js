import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  // rgb is an array
  // every item seperated by ,
  const bcg = rgb.join(",");
  // passing all the properties of rgb array
  const hex = rgbToHex(...rgb);
  // initializing hexvalue
  const hexValue = `#${hexColor}`;

  // useffect on alert that we passed
  //  as we click on box the alert willl display for 3 sec
  // timeout to clear the value of alert
  // how long itwill run
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    // clean up pervious settimeout value
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      // as index is greater than 10 the color of text will get lighter
      // dark color the box text will be in light color
      className={`color ${index > 10 && "color-light"}`}
      //  each color have a unique color
      style={{ backgroundColor: `rgb(${bcg})` }}
      //  click on box the alert will display for 3 sec
      onClick={() => {
        setAlert(true);
        // look clipboard property n passing writetext  :hexvalue
        // copy the hex color value  to new tab
        navigator.clipboard.writeText(hexValue);
      }}
    >
      {/* each color have  percentage on each  box */}
      <p className="percent-value">{weight}%</p>
      {/* display the hex value : color name/value*/}
      <p className="color-value">{hexValue}</p>
      {/* conditional rendering:if my alert is true i wana display paragrph */}
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
