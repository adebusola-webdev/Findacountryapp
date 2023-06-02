import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-">
        <div className="container-fluid">
          <Link className="navbar-brand  text-danger fs-2 fw-bold" to="/Countries">
            World countries
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-danger fs-3"
                  aria-current="page"
                  href="#"
                ></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger fs-4" to="/search">
                  Search <i class="fa-thin fa-magnifying-glass"></i>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-danger fs-4"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Continents
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item  fs-5 " to="/africa">
                      Africa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fs-5" to="/europe">
                      Europe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item  fs-5 " to="/Namerica">
                      North-america
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fs-5" to="/Samerica">
                      South-america
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item  fs-5 " to="/asia">
                      Asia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fs-5" to="/antarctica">
                      Antarctica
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fs-5" to="/austrailia">
                      Austrailia
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger fs-4" href="#">
                  Population
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
