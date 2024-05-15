import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg  " id="navbar-example2" data-bs-theme="dark">
        <div class="container p-3">
          <Link className="navbar-brand fs-3 fw-bolder" to={``}>
            START FRAMEWORK
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0 nav-pills">
              <li class="nav-item me-2 text-white my-2">
                <NavLink className="nav-link" aria-current="page" to={`about`}>
                  ABOUT
                </NavLink>
              </li>
              <li class="nav-item me-2 my-2 text-white">
                <NavLink className="nav-link" to={`portfolio`}>
                  PORTFOLIO
                </NavLink>
              </li>

              <li class="nav-item me-2 my-2 text-white">
                <NavLink className="nav-link" to= {`contact`}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
