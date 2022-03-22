import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// passing items ,removeitems and edititems props to List funciton
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {/* mapping the object item */}
      {/* each item in list -> item  */}
      {items.map((item) => {
        //    each item have unique id and title
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                //   editing -button
                type="button"
                className="edit-btn"
                // onclicking invoke edititem function
                onClick={() => editItem(id)}
              >
                {/* invoke Faedit component to edit  */}
                <FaEdit />
              </button>
              <button
                //   deleting -button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                {/* invoke FaTrash component to delete  */}

                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
