import { useState } from "react";
import Api from "../../component/api";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await Api.post("api/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
        alert("anda berhasil login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar isAuth={true}></Navbar>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card p-3">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" onChange={(e) => setPass(e.target.value)} required />
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
