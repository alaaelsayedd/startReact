import { Component } from "react";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div id="footer">
        <div className="container p-5">
            <div className="row row-cols-1 row-cols-lg-3 gy-5 text-white p-3">
               <div className="col">
                <div>
                    <h4 className="fs-4">LOCATION</h4>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
               </div>
               <div className="col">
                <div>
                    <h4>AROUND THE WEB</h4>
                    <div className="icons d-flex  mt-3">
                        <div className="iconn me-3">
                        <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="iconn me-3">
                        <i class="fa-brands fa-google"></i>
                        </div>
                        <div className="iconn me-3">
                        <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className="iconn me-3">
                        <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
               </div>
               <div className="col">
                <div>
                    <h4 className="fs-4">LOCATION</h4>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                   
                </div>
               </div>
            </div>

        </div>
        <footer className="text-center">
            <p>Copyright © Your Website 2021</p>
        </footer>
      </div>
    );
  }
}
