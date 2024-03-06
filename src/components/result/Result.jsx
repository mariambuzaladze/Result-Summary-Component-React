import "./result.css";

export default function Result() {
  return (
    <div className="result">
      <h2 className="your-result">Your Result</h2>
      <div className="oval">
        <p className="some">76</p>
        <p className="all">of 100</p>
      </div>
      <div className="performance">
        <p className="text">Great</p>
        <p className="message">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}
