import React, { useState } from "react";
import "./summary.css";
import Memory from "/images/icon-memory.svg";
import Reaction from "/images/icon-reaction.svg";
import Verbal from "/images/icon-verbal.svg";
import Visual from "/images/icon-visual.svg";
import Containers from "../containers/containers";

export default function Summary() {
  const [text, setText] = useState("Reaction");
  const [icon, setIcon] = useState(Reaction);
  const [number, setNumber] = useState(80);
  const [className, setClassName] = useState("reaction");

  return (
    <div className="summary">
      <p className="title">Summary</p>

      <div className="content">
        <Containers
          text={text}
          icon={icon}
          number={number}
          className={className}
        />
        <Containers
          text="Memory"
          icon={Memory}
          number="92"
          className="memory"
        />
        <Containers
          text="Verbal"
          icon={Verbal}
          number="61"
          className="verbal"
        />
        <Containers
          text="Visual"
          icon={Visual}
          number="73"
          className="visual"
        />
      </div>

      <button className="continue">Continue</button>
    </div>
  );
}
