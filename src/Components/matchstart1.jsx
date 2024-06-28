import React, { useEffect, useState } from "react";
import "../css/ms1.css";

const MatchStart1 = () => {
  const [isSlide, setSlide] = useState(true);
  const [P11, setP11] = useState("");
  const [P21, setP21] = useState("");

  const [Char11, setChar11] = useState("");
  const [Char21, setChar21] = useState("");

  const [RoundName, setRoundName] = useState("");
  const [PoolName, setPoolName] = useState("");

  const reload = () => {
    setP11(localStorage.getItem("p11"));
    setP21(localStorage.getItem("p21"));

    setChar11(localStorage.getItem("Char11"));
    setChar21(localStorage.getItem("Char21"));

    setRoundName(localStorage.getItem("round"));
    setPoolName(localStorage.getItem("pool"));
  };

  useEffect(() => {
    reload();

    // Trigger animation after component is mounted
    setSlide(true);
  }, [isSlide]);

  return (
    <>
      <div className="ms1">
        <div className={`mu1contain ${isSlide ? "slide-right" : ""}`}>
          <h1 className="mu1round">{RoundName}</h1>
          <h1 className="mu1pool">{PoolName}</h1>

          <div className="mu1VS">
            <img
              src={process.env.PUBLIC_URL + Char11}
              width="64"
              height="64"
              alt=""
            />
            <h1>{P11}</h1>

            <h1 className="vsText">VS.</h1>

            <h1>{P21}</h1>
            <img
              src={process.env.PUBLIC_URL + Char21}
              width="64"
              height="64"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchStart1;
