import "./App.css";

import Counter from "./components/Counter/Counter";
import ItemList from "./components/ItemList/ItemList";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <Counter />
      <h1> home </h1>
    </div>
  );
}

export default App;
