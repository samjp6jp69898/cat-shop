import "./App.css";
import fb from "./logo/facebook.png";
import google from "./logo/google.png";
import line from "./logo/line.png";
import info from "./logo/info.png";
import cart from "./logo/cart.png";
import order from "./logo/order.png";
import ig from "./logo/instagram.png";
import line2 from "./logo/line2.png";
import catbg from "./logo/貓咪背景圖.png";
import { useState } from "react";

function App() {
  const [showinfo, setShowinfo] = useState("");
  const [showcart, setShowcart] = useState("");
  const [showorder, setShoworder] = useState("");
  const [popup, setPopup] = useState(false);

  const displayinfo = () => {
    setShowinfo("購物前須知");
  };

  const mouseLeaveinfo = () => {
    setShowinfo("");
  };

  const displaycart = () => {
    setShowcart("購物車");
  };

  const mouseLeavecart = () => {
    setShowcart("");
  };

  const displayorder = () => {
    setShoworder("訂單查詢");
  };

  const mouseLeaveorder = () => {
    setShoworder("");
  };

  const showpopup = () => setPopup(!popup);

  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <i class="fa-solid fa-bars" onClick={showpopup}></i>
          <div className={popup ? "popmenu active" : "popmenu"} id="popup">
            <i class="fa-solid fa-xmark" onClick={showpopup}></i>
          </div>
          <div className="nav info">
            <img
              src={info}
              alt=""
              className="icon-info"
              onMouseOver={displayinfo}
              onMouseOut={mouseLeaveinfo}
            ></img>
            <p className="infoP">{showinfo}</p>
          </div>
          <div className="nav cart">
            <img
              src={cart}
              alt=""
              className="icon-cart"
              onMouseOver={displaycart}
              onMouseOut={mouseLeavecart}
            ></img>
            <p className="infoC">{showcart}</p>
          </div>
          <div className="nav order">
            <img
              src={order}
              alt=""
              className="icon-order"
              onMouseOver={displayorder}
              onMouseOut={mouseLeaveorder}
            ></img>
            <p className="infoO">{showorder}</p>
          </div>

          <div className="nav-logo-container fb">
            <img src={fb} alt=""></img>
            <p>登入</p>
          </div>
          <div className="nav-logo-container google">
            <img src={google} alt=""></img>
            <p>登入</p>
          </div>
          <div className="nav-logo-container line">
            <img src={line} alt=""></img>
            <p>登入</p>
          </div>
          <img src={ig} alt="" className="contact-icon-ig"></img>
          <img src={line2} alt="" className="contact-icon-line"></img>
          <img src={fb} alt="" className="contact-icon-fb"></img>
        </div>
        <div className="hero_container">
          <img src={catbg} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
