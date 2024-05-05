import { Component } from "react";

export default class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="conatct">
        <div className="container mx-auto">
          <div className="row p-5">
            <div className="col-12">
              <div className="head text-center">
                <h2>CONATCT SECTION</h2>
                <div className="icon col-4 col-lg-2 mx-auto  my-3 ">
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="col-11 col-lg-8 mx-auto mt-5">

              <div className="form-floating mb-3">
                  <input
                    type="Name"
                    className="form-control border-bottom"
                    id="floatingInputName"
                    placeholder=""
                    
                  />
                  <label for="floatingInputName">User Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control border-bottom"
                    id="floatingInputAge"
                    placeholder=""
                  />
                  <label for="floatingInputAge">User Age</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control border-bottom"
                    id="floatingInputEmail"
                    placeholder=""
                  />
                  <label for="floatingInputEmail">User Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control border-bottom"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">User password</label>
                </div>
                <div className="form-floating my-3">
                  <button className="btn "> SEND Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
