import React, { useEffect } from "react";
// grabing all the properties :type , msg ,list
const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      //  display the remove alert for 3 sec
      removeAlert();
    }, 3000);
    //  clear all pervious timeout
    return () => clearTimeout(timeout);
  }, [list]);
  //    all alert n alert  depend on type :success /danger
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
