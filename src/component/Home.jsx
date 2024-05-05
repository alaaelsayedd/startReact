import { Component } from "react";
import homeImage from '../imgs/avataaars.svg'

export default class Home extends Component {
  state = {};
  render() {
    return (
     <div className="home" id="home">
      <div className="container col-10 col-md-6 col-lg-4   mt-5 py-5">
        <div className="row">
            <div className="col-10 mx-auto ">
                <div className="w-75 mx-auto">
                    <img src= {homeImage} alt=""  className="w-100"/>
                </div>
            </div>
            <div className="col-12 mx-auto text-center mt-3">
                <div className="content">
                    <h1>START FRAMEWORK</h1>
                    <div className="icon w-50 mx-auto  my-3">
                    <i class="fa-solid fa-star"></i>
                    
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}
