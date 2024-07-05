import { useState } from "react";
import Item from "./Item";

function PackingList({ initialItems, setInitialItems }) {
    const [sortBy,setSortBy] = useState("input");
    let copyItem = [...initialItems];
    if(sortBy==="input"){
      copyItem.sort((a,b)=>a.id-b.id);
    }
    else if(sortBy==="description"){
      copyItem.sort((a,b)=> a.description.localeCompare(b.description) || a.id-b.id);
    }
    else{
      copyItem.sort((a,b)=> Number(b.packed) - Number(a.packed) || a.id - b.id)
    }
    function clearHandler(){
      const confirm = window.confirm("Are you sure you want clear list?")
      if(confirm){
        setInitialItems((prev)=>{
          return (prev.filter((item)=> false))
        })
      }
    }
    return (
      <div className="list">
        <ul>
          {copyItem.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                description={item.description}
                packed={item.packed}
                setInitialItems={setInitialItems}
              />
            );
          })}
        </ul>
        <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearHandler}>Clear list</button>
        </div>
      </div>
    );
  }

  export default PackingList;