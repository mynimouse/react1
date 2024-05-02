export default function Navbar({ isAuth, active }) {
  return (
    <>
      {isAuth === true ? (
        <></>
      ) : (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container justify-content-between">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category">
                  Category
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
