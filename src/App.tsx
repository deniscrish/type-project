import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { Navigation } from "./components/Navigation/Navigation";
import { TodoPage } from "./pages/TodoPage/TodoPage";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
};

export default App;
