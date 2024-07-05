
function Item({ quantity, description, packed, setInitialItems, id }) {
    function ButtonHandler() {
      setInitialItems((item) => {
        return item.filter((temp) => temp.id !== id);
      });
    }
  
    function checkHandler() {
      setInitialItems((prev) => {
        return prev.map((item) => ( item.id===id? {...item,packed:!item.packed} : {...item,packed:item.packed}) );
      });
    }
    return (
      <li>
        <input type="checkbox" checked={packed} onChange={checkHandler} />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {description}
        </span>
        <button onClick={ButtonHandler}>❌</button>
      </li>
    );
  }

  export default Item;