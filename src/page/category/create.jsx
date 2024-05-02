import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../component/api";
import Navbar from "../navbar";

export default function CategoryCreate() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDesk] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage["token"];
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("description", description);

    await Api.post("api/category", formData)
      .then(() => {
        navigate("/category");
        alert("berhasil menyimpan data");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar active={"category"}></Navbar>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card p-3">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="slug">Slug</label>
                  <input type="text" className="form-control" onChange={(e) => setSlug(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" onChange={(e) => setDesk(e.target.value)} required />
                </div>
                <button className="btn btn-primary mt-2">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
