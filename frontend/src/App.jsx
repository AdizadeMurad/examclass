import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddProduct from "./pages/AddProduct";
import UptadeProduct from "./pages/UptadeProduct";
import Admin from "./pages/Admin";
import MainLayout from "./layout/MainLayout";
import NoPage from "./pages/NoPage";
import { HelmetProvider } from 'react-helmet-async';
import Basket from "./pages/Basket";
import MainProvider from "./context/MainProvider";
function App() {


  return (
    <>
    <MainProvider>


      <BrowserRouter>
      <HelmetProvider>
      <Routes>
        <Route path="/" element={< MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/UptadeProduct/:id" element={<UptadeProduct />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </HelmetProvider>
    </BrowserRouter>
    </MainProvider>
 
    </>
  )
}

export default App
