import "./Hero.css";
import Input from "./Input";
import BtnLight from "../UI/BtnLight";

export default function Hero() {
  return (
    <section className="hero bg-dark">
      <div className="hero-content container-lg">
        <div className="hero-input">
          <h1 className="txt-xl">Go wherever you want with Uber.</h1>
          <p className="txt-sm">Order a ride, get in and go.</p>
          <Input />
          <BtnLight BtnTxt="See prices" BtnStyle="black" />
        </div>
        <div className="hero-img">
          <img src="src\assets\images\Ride-with-Uber.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
