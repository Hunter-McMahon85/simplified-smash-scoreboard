import React, { useEffect, useState } from "react";
import "../css/doubles.css";

const ScoreboardDuo = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [P11, setP11] = useState("");
  const [P12, setP12] = useState("");
  const [P21, setP21] = useState("");
  const [P22, setP22] = useState("");

  const [Pro11, setPro11] = useState("");
  const [Pro12, setPro12] = useState("");
  const [Pro21, setPro21] = useState("");
  const [Pro22, setPro22] = useState("");

  const [C11, setC11] = useState("");
  const [C12, setC12] = useState("");
  const [C21, setC21] = useState("");
  const [C22, setC22] = useState("");

  const [S1, setS1] = useState(0);
  const [S2, setS2] = useState(0);
  const [Rname, setRname] = useState("");
  const [Pool, setPool] = useState("");


  const reload = () => {
    setP11(localStorage.getItem("p11"));
    setP12(localStorage.getItem("p12"));
    setP21(localStorage.getItem("p21"));
    setP22(localStorage.getItem("p22"));

    setPro11(localStorage.getItem("Pronoun11"));
    setPro12(localStorage.getItem("Pronoun12"));
    setPro21(localStorage.getItem("Pronoun21"));
    setPro22(localStorage.getItem("Pronoun22"));

    setC11(localStorage.getItem("Char11"));
    setC12(localStorage.getItem("Char12"));
    setC21(localStorage.getItem("Char21"));
    setC22(localStorage.getItem("Char22"));

    setS1(localStorage.getItem("p1score"));
    setS2(localStorage.getItem("p2score"));
    setRname(localStorage.getItem("round"));
    setPool(localStorage.getItem("pool"));
  };

  useEffect(() => {
    const interval = setInterval(reload, 1);
    // Trigger animation after component is mounted
    setIsAnimated(true);
    reload();

    return () => {
      clearInterval(interval);
    };
  }, [isAnimated]);

  return (
    <>
      <div className={`doublecontain ${isAnimated ? "slide-in" : ""}`}>
        <div className="doubleoverlay">

          <div class="container diamond-shape">
            <div class="item-count">
              <h4>{Rname}</h4>
              <h4 className="pool">{Pool}</h4>
            </div>
          </div>

          <div className="gamers2">
            <div className="gamer2">
              <img className="lefticon" src={process.env.PUBLIC_URL + C11} alt="" />
              <h1 className="tag2">{P11}</h1>
              <h1 className="pronoun2">{Pro11}</h1>


              <img src={process.env.PUBLIC_URL + C12} alt="" />
              <h1 className="tag2">{P12}</h1>
              <h1 className="pronoun2">{Pro12}</h1>

              <h1 className="score2">{S1}</h1>
            </div>
            <div className="gamer2">
              <img className="lefticon" src={process.env.PUBLIC_URL + C21} alt="" />
              <h1 className="tag2">{P21}</h1>
              <h1 className="pronoun2">{Pro21}</h1>


              <img src={process.env.PUBLIC_URL + C22} alt="" />
              <h1 className="tag2">{P22}</h1>
              <h1 className="pronoun2">{Pro22}</h1>

              <h1 className="score2">{S2}</h1>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ScoreboardDuo;
