import { useState } from "react";

function Form({ setInitialItems }) {
    const options = [];
    for (let i = 1; i <= 20; i++) {
      options.push(i);
    }
  
    const [item, setItem] = useState("");
    const [qty, setQty] = useState(1);
  
    function handleItemChange(e) {
      setItem(e.target.value);
    }
    function handleQtyChange(e) {
      setQty(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (item.trim() === "") {
        return;
      }
  
      const newItem = {
        id: Date.now(),
        description: item,
        quantity: qty,
        packed: false,
      };
      setInitialItems((item) => {
        item = [...item, newItem];
        return item;
      });
      setItem("");
      setQty(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select value={qty} onChange={handleQtyChange}>
          {options.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <input
          type="text"
          value={item}
          placeholder="Item..."
          onChange={handleItemChange}
        />
        <button>add</button>
      </form>
    );
  }

  export default Form;