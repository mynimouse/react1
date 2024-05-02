import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import CategoryIndex from "../page/category";
import CategoryCreate from "../page/category/create";
import Login from "../page/auth/login";

export default function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/category" element={<CategoryIndex></CategoryIndex>}></Route>
      <Route path="/category-create" element={<CategoryCreate></CategoryCreate>}></Route>

      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}
