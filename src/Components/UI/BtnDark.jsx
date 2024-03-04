import "./BtnDark.css";

export default function BtnDark({ BtnTxt }) {
  return (
    <div className="btn-dark">
      <button className="txt-sm">{BtnTxt}</button>
    </div>
  );
}
