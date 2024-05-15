import { Component } from "react";
import img1 from "../imgs/poert1.png";
import img2 from "../imgs/port2.png";
import img3 from "../imgs/port3.png";

export default class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div id="portfolio">
        <div className="container mx-auto">
          <div className="row p-5 ">
            <div className="col-12">
              <div className="head text-center ">
                <h2>PORTFOLIO COMPONENT</h2>
                <div className="icon col-4 mx-auto  my-3 ">
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
                <div className="col ">
                  <div className="position-relative prot">
                    <div className="portimge">
                      <img src={img1} alt="img1" className="w-100" />
                    </div>
                    <div
                      className="filter d-flex justify-content-center align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="position-relative prot">
                    <div className="portimge">
                      <img src={img2} alt="img1" className="w-100" />
                    </div>
                    <div
                      className="filter d-flex justify-content-center align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="position-relative prot">
                    <div className="portimge">
                      <img src={img3} alt="img1" className="w-100" />
                    </div>
                    <div
                      className="filter d-flex justify-content-center align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="position-relative prot">
                    <div className="portimge">
                      <img src={img2} alt="img1" className="w-100" />
                    </div>
                    <div
                      className="filter d-flex justify-content-center align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="position-relative prot">
                    <div className="portimge">
                      <img src={img1} alt="img1" className="w-100" />
                    </div>
                    <div
                      className="filter d-flex justify-content-center align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="position-relative prot">
                    <div className="portimge">
                      <img src={img3} alt="img1" className="w-100" />
                    </div>
                    <div
                      className="filter d-flex justify-content-center align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade   mx-auto"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-body">
                <img src={img1} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade   mx-auto"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-body">
                <img src={img2} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade   mx-auto"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-body">
                <img src={img3} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
