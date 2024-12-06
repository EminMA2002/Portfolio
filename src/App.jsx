// Style
import "./App.css"

//React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage"
import WorksPage from "./pages/WorksPage/WorksPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import ProductPage from "./pages/ProductPage/ProductPage"

// Layouts
import MainLayout from "./layouts/MainLayout/MainLayout";


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;