import Header from "./Components/Header/Header";
import BtnUnderlineDark from "./Components/UI/BtnUnderlineDark";
import HomePage from "./Pages/HomePage";

export default function Root() {
  return (
    <div className="root">
      <Header />
      <HomePage />
    </div>
  );
}
