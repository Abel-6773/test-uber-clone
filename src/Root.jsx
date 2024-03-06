import Header from "./Components/Header/Header";
import BtnUnderlineDark from "./Components/UI/BtnUnderlineDark";
import HomePage from "./Pages/HomePage";
import { useState } from "react";
export default function Root() {
  const [HamMenuActive, setHamMenuActive] = useState(false);
  const toggler = function () {
    setHamMenuActive((c) => {
      return !c;
    });
  };

  return (
    <div className="root">
      <Header HamMenuActive={HamMenuActive} toggler={toggler} />
      <HomePage HamMenuActive={HamMenuActive} />
    </div>
  );
}
