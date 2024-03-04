import "./AboutInfo.css";
import BtnDark from "../UI/BtnDark";
import BtnUnderlineDark from "../UI/BtnUnderlineDark";
export default function AboutInfo({
  HeaderTxt,
  InfoTxt,
  BtnDarkTxt,
  BtnUderTxt,
}) {
  return (
    <div className="about-info">
      <h2 className="txt-lg">{HeaderTxt}</h2>
      <p className="txt-sm">{InfoTxt}</p>
      <div className="about-buttons">
        <BtnDark BtnTxt={BtnDarkTxt} />
        <BtnUnderlineDark BtnTxt={BtnUderTxt} />
      </div>
    </div>
  );
}
