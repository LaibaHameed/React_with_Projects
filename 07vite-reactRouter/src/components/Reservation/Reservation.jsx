import React from "react";
import "./Reservation.css"

const Reservation = () => {
  return (
    <>
      {/* <!-- main section starts --> */}
      <section className="head-img">
        <img
          className="header-img"
          src="../../assets/imgs/reservation.jpg"
          alt=""
          srcset=""
        />
      </section>

      <h1 className="reservation">RESERVATION FORM</h1>
      <div className="hr"></div>
      <p className="paragraph">
        <small>
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos
          ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at,
          vel pertinax sensibus id.error epicurei mea.
        </small>
      </p>

      <div className="parent-box">
        <div className="child-box1">
          <form action="#">
            <div className="form-div">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name*"
                required
                className="input"
                // style={"margin-right: 2%;"}
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Phone*"
                required
              />
            </div>
            <div className="form-div">
              <input
                type="number"
                name=""
                id=""
                placeholder="Seats*"
                required
                className="input"
                // style={"margin-right: 2%;"}
              />
              <input type="date" name="" id="" placeholder="Phone*" required />
            </div>
            <div className="form-div">
              <input
                type="text"
                name=""
                id=""
                placeholder="Time*"
                required
                className="input"
                // style={"margin-right: 2%;"}
              />
              <input type="email" name="" id="" placeholder="Email*" required />
            </div>
            <textarea
              rows="10"
              name=""
              required
              placeholder="Notes*"
            ></textarea>
            <button>SUBMIT</button>
          </form>
        </div>
        <div className="child-box2">
          <img src="../../assets/imgs/Reservation-N-4.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Reservation;
