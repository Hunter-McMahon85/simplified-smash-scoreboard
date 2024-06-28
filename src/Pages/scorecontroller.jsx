import React from "react";
import Names from "../Components/namesinput";
import "../css/control.css"

function Controller() {
  let GM = "";

  let p1score = 0;
  let p2score = 0;
  localStorage.setItem("p1score", p1score);
  localStorage.setItem("p2score", p2score);

  function score(p, x) {
    if (p === 1) {
      p1score = p1score + x;
      localStorage.setItem("p1score", p1score);
    } else {
      p2score = p2score + x;
      localStorage.setItem("p2score", p2score);
    }
  }

  function reset_scores() {
    p1score = 0;
    p2score = 0;
    localStorage.setItem("p1score", p1score);
    localStorage.setItem("p2score", p2score);
  }


  const Show_MU = () => {
    GM = localStorage.getItem("gm");
    switch (GM) {
      case "D":
        localStorage.setItem("ScoreboardType", "doublestart");
        setTimeout(() => {
          localStorage.setItem("ScoreboardType", "double");
        }, 6000);
        break;
      case "S":
        localStorage.setItem("ScoreboardType", "singlestart");
        setTimeout(() => {
          localStorage.setItem("ScoreboardType", "single");
        }, 6000);
        break;
      default:
        localStorage.setItem("ScoreboardType", "h");
        break;
    }
  };

  return (
    <>
      <div className="UI_Contain">
        <div className="scoring">
          <button onClick={() => score(1, 1)}>Win Top</button>

          <button onClick={() => score(2, 1)}>Win Bottom</button>

          <button onClick={() => reset_scores()}>Reset Score</button>
        </div>
        <h2>Round INFO</h2>
        <button onClick={() => Show_MU()}>Show Matchup</button>
        <br />
        <Names/>
      </div>
    </>
  );
}

export default Controller;
