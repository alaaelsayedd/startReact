import { Component } from "react";

export default class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <div className="container text-white mt-5 p-5 ">
          <div className="row p-lg-5">
            <div className="col-12 text-center">
              <div>
                <h2>ABOUT COMPONENT</h2>
                <div className="icon w-50 mx-auto  my-3">
                    <i class="fa-solid fa-star"></i>
                    
                    </div>
              </div>
              <div className="col-12 ">
                <div className="d-flex flex-wrap flex-lg-nowrap ">
                  <p className="me-2 my-2">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                  <p className="my-2 me-2 pb-5">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
