import React, { useEffect, useState } from "react";
import "../css/commie.css";

const Comms = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [Commie1, setCommie1] = useState("");
  const [Commie2, setCommie2] = useState("");
  const [Commiep1, setCommiep1] = useState("");
  const [Commiep2, setCommiep2] = useState("");


  const reload = () => {
    setCommie1(localStorage.getItem("commie1"));
    setCommie2(localStorage.getItem("commie2"));

    setCommiep1(localStorage.getItem("commiep1"));
    setCommiep2(localStorage.getItem("commiep2"));
  };

  useEffect(() => {
    // Trigger animation after component is mounted
    setIsAnimated(true);

    reload();
    const interval = setInterval(reload, 1);
    return () => {
      clearInterval(interval);
    };
  }, [isAnimated]);

  return (
    <>
      <div className={`comcontain ${isAnimated ? "slide-in" : ""}`}>
        <div className="comoverlay">
          <div className="coml">
            <h1 className="cpronoun">{Commiep1}</h1>
            <h1 className="ctagl">{Commie1}</h1>
          </div>

          <div class="comcontainer diamond-shape">
            <div class="comitem-count">
              <h4>Commentators</h4>
            </div>
          </div>

          <div className="comr">
            <h1 className="ctagr">{Commie2}</h1>
            <h1 className="cpronoun">{Commiep2}</h1>
          </div>
        </div>
      </div >
    </>
  );
};

export default Comms;
