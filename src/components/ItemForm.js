import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, search}) {
  
  const [name, setName] = useState();
  const [category, setCategory] = useState("Produce");

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: name,
    category: category,
  }; 

  return (
    <form className="NewItem" onSubmit={(e)=>{onItemFormSubmit(newItem); e.preventDefault();}}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=>setCategory(e.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;