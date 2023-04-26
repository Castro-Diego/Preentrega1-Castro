import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailcontainer from "./components/ItemDetail/ItemDetailcontainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/" element={<ItemDetailcontainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
