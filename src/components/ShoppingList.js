import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items ,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [SearchItem, setSearchItem] = useState();
  console.log(SearchItem);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
    setSearchItem(event.target.value);
  }

  function onItemFormSubmit(element) {
    setItems([...items, element]);
    console.log(items)
  } 


  const itemsToDisplay = items.filter((item) => {
    if( SearchItem===undefined)
    {
      if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

    }
    else
    {
      if (selectedCategory === "All" && item.name.includes(SearchItem)) return true;

    return (item.category === selectedCategory && item.name.includes(SearchItem));
    }
    
  });



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={SearchItem}   onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;