import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card p-3">
              <h2>Galsans</h2>
              <p>lorem ipsum dolor sit emet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
