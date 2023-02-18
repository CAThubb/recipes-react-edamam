import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ProductsList from "./pages/ProductsList";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="products" element={<ProductsList/>}/>
              <Route path="*" element={<NoPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
