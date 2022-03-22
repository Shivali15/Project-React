import React, { useState, useEffect } from "react";
import List from "./list";
import Alert from "./alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  // set name of products
  const [name, setName] = useState("");
  // list of items store in list form in localstorage
  const [list, setList] = useState(getLocalStorage());
  // edit the items in the list
  const [isEditing, setIsEditing] = useState(false);
  // which  will edit or which is edited using id of particular items
  const [editID, setEditID] = useState(null);
  // if an invalid/valid ,update/add things happens then pop up alert : show msz
  //  type : danger (deleted) :red one / success (added/edit)  :green one
  // msg : going to display
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  // onsubmit  functioning done by handelsubmit ()
  // (e) :event to be perfrom
  const handleSubmit = (e) => {
    e.preventDefault();
    // if name is : empty string/ false -> then display -> danger n msz
    if (!name) {
      showAlert(true, "danger", "please enter value");
    }
    // for editing
    // both name and isediting should true
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      // adding item
      // show:true ->show alert , type:success , msz:"...."
      showAlert(true, "success", "item added to the list");
      //  when added time date it should be string only  -> name
      const newItem = { id: new Date().getTime().toString(), title: name };

      // get all pervious items of the list(props) n add new item to it
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    // if all properties matches to variable name then show ,type, msz
    setAlert({ show, type, msg });
  };
  // clear  list -> delete all the items of list
  const clearList = () => {
    //  alert will -> danger msz-> list will empty
    showAlert(true, "danger", "empty list");
    //  list will null
    setList([]);
  };
  // remove item using id of items in list
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    //  filter return always new array
    //  if item id does not matches with id which is passed then return to my array
    setList(list.filter((item) => item.id !== id));
  };
  //  edit /update the item using id
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      {/* submit button : add products/items in list (localstorage) */}
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* if alert.show is true then invoke component <Alert/> */}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. milk"
            // value in input area will be the name property
            value={name}
            // changing the value  :event target value
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {/* isediting is true then display  edit  otherwise  display submit in the button  */}
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {/* if list length is bigger  than 0 -> true  then only edit and remove   */}
      {list.length > 0 && (
        <div className="grocery-container">
          {/* passing the list props and removeitem function  and edit item function */}
          <List items={list} removeItem={removeItem} editItem={editItem} />
          {/* clear all data  */}
          {/*  onclicking the  function  clearlist will invoke  */}
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
