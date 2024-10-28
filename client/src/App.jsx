import "./App.css";
import EditProductForm from "./components/EditProductForm";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductForm from "./components/CreateProductForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Start coding here */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route
            path="/product/edit/:productId"
            element={<EditProductForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
