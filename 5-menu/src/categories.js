import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

// ()=>   inline function

/* indiviually writing buttons we wil iterate it by category

  <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        Breakfast
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          filterItems("lunch");
        }}
      >
        Lunch
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          filterItems("shakes");
        }}
      >
        Shakes
      </button>
    </div>


*/
