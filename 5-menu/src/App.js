import React, { useState } from "react";
// menu components which display list
import Menu from "./menu";
//  catrgories which display buttons
import Categories from "./categories";
//  all items coming from data.js where array is prsent for all menuitems
import items from "./data";

//  mapping items by category
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // once the app will load the all items will load becoz useState(items) that means menuitems=items
  const [menuitems, setmenuitems] = useState(items);
  const [categories, setcategories] = useState(allCategories);

  const filteritems = (category) => {
    // all button l kiye sare hi items display ho
    if (category === "all") {
      setmenuitems(items);
      return;
    }

    // filter items as item category matches then return that items

    const newitems = items.filter((item) => item.category == category);
    setmenuitems(newitems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline "></div>
        </div>
        <Categories categories={categories} filterItems={filteritems} />
        <Menu items={menuitems} />
      </section>
    </main>
  );
}

export default App;
