import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from "./PackingList";
import Stats from "./Stats";



// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];


function App() {
  const [initialItems, setInitialItems] = useState([]);
  return (
    <div className="app">
      <Logo />
      <Form setInitialItems={setInitialItems} />
      <PackingList
        initialItems={initialItems}
        setInitialItems={setInitialItems}
      />
      <Stats initialItems={initialItems} />
    </div>
  );
}

export default App;
