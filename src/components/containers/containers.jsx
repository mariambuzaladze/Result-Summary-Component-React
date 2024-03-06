export default function Containers(props) {
  return (
    <div className={`containers ${props.className}`}>
      <div className="left">
        <img className="lightning" src={props.icon} alt="icon of lightning" />
        <p className="texts">{props.text}</p>
      </div>

      <div className="right">
        <span className="number">{props.number}</span>
        <span className="number100">/ 100</span>
      </div>
    </div>
  );
}
