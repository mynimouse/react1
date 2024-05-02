import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../component/api";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

export default function CategoryIndex() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get("api/category");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await Api.get(`api/category/search/${search}`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = () => {
    const token = localStorage.getItem("token");1 
    if (token) {
      navigate("/category-create");
    } else {
      navigate("/login"); // Jika tidak ada token, navigate ke halaman login
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-3">
        <div className="d-flex justify-content-between mb-3">
          <h2>Category</h2>
          <button onClick={handleAddCategory} className="btn btn-primary">
            Add
          </button>
        </div>
        <div className="card-header d-flex mb-3">
          <input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="row gap-2 justify-content-center">
          {data.map((category) => (
            <div className="card col-3" key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.slug}</p>
              <span>{category.description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
