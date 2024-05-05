import { Component } from "react";

export default class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg position-fixed " id="navbar-example2" data-bs-theme="dark">
        <div class="container p-3">
          <a class="navbar-brand fs-3 fw-bolder" href="#home">
            START FRAMEWORK
          </a>
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
                <a class="nav-link  " aria-current="page" href="#about">
                  ABOUT
                </a>
              </li>
              <li class="nav-item me-2 my-2 text-white">
                <a class="nav-link " href="#portfolio">
                  PORTFOLIO
                </a>
              </li>

              <li class="nav-item me-2 my-2 text-white">
                <a class="nav-link" href="#conatct">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
