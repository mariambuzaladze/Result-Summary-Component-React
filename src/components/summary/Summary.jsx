import "./summary.css";
import Memory from "/images/icon-memory.svg";
import Reaction from "/images/icon-reaction.svg";
import Verbal from "/images/icon-verbal.svg";
import Visual from "/images/icon-visual.svg";

export default function Summary() {
  return (
    <div className="summary">
      <p className="title">Summary</p>

      <div className="content">
        <div className="containers reaction">
          <div className="left">
            <img className="lightning" src={Reaction} alt="icon of lightning" />
            <p className="texts">Reaction</p>
          </div>

          <div className="right">
            <span className="number">80</span>
            <span className="number100">/ 100</span>
          </div>
        </div>

        <div className="containers memory">
          <div className="left">
            <img className="brain" src={Memory} alt="icon of brain" />
            <p className="texts">Memory</p>
          </div>

          <div className="right">
            <span className="number">92</span>
            <span className="number100">/ 100</span>
          </div>
        </div>

        <div className="containers verbal">
          <div className="left">
            <img className="message" src={Verbal} alt="icon of message" />
            <p className="texts">Verbal</p>
          </div>

          <div className="right">
            <span className="number">61</span>
            <span className="number100">/ 100</span>
          </div>
        </div>

        <div className="containers visual">
          <div className="left">
            <img className="eye" src={Visual} alt="icon of an eye" />
            <p className="texts">Visual</p>
          </div>

          <div className="right">
            <span className="number">73</span>
            <span className="number100">/ 100</span>
          </div>
        </div>
      </div>

      <button className="continue">Continue</button>
    </div>
  );
}
