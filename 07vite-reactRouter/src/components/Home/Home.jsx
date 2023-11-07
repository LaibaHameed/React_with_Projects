import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <>
      {/* <!-- home section starts  --> */}
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="freshCoffee">fresh coffee in Morning</h3>
            <Link to="/" className="btn">
              {" "}
              Buy one Now
            </Link>
          </div>

          <div className="image">
            <img
              // src={require('../../assets/imgs/home-img-1.png')}
              src="../../assets/imgs/home-img-1.png"
              className="main-img"
              alt=""
            />
          </div>
        </div>

        <div className="img-slider">
          <img src="../../assets/imgs/home-img-1.png" alt="" />
          <img src="../../assets/imgs/home-img-2.png" alt="" />
          <img src="../../assets/imgs/home-img-3.png" alt="" />
        </div>
      </section>
      {/* <!-- home section ends  --> */}
    </>
  );
};

export default Home;
