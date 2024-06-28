import React, { useEffect, useState } from "react";
import "../css/ms2.css";

const MatchStart2 = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [P11, setP11] = useState("");
  const [P12, setP12] = useState("");
  const [P21, setP21] = useState("");
  const [P22, setP22] = useState("");

  const [C11, setC11] = useState("");
  const [C12, setC12] = useState("");
  const [C21, setC21] = useState("");
  const [C22, setC22] = useState("");

  const [Rname, setRname] = useState("");
  const [Pool, setPool] = useState("");

  const reload = () => {
    setP11(localStorage.getItem("p11"));
    setP12(localStorage.getItem("p12"));
    setP21(localStorage.getItem("p21"));
    setP22(localStorage.getItem("p22"));

    setC11(localStorage.getItem("Char11"));
    setC12(localStorage.getItem("Char12"));
    setC21(localStorage.getItem("Char21"));
    setC22(localStorage.getItem("Char22"));

    setRname(localStorage.getItem("round"));
    setPool(localStorage.getItem("pool"));
  };

  useEffect(() => {
    reload();
    // Trigger animation after component is mounted
    setIsAnimated(true);
  }, [isAnimated]);
  return (
    <>
      <div className="ms2">
        <div className={`mu2contain ${isAnimated ? "slide-right2" : ""}`}>
          <h1 className="mu1round">{Rname}</h1>
          <h1 className="mu1pool">{Pool}</h1>
          <div className="mu2VS">
            <div className="mu2duo">
              <div className="mu2p">
              <img
                  src={process.env.PUBLIC_URL + C11}
                  height="64"
                  width="64"
                  alt=""
                />
                <h1>{P11}</h1>
              </div>

              <div className="mu2p">
              <img
                  src={process.env.PUBLIC_URL + C12}
                  height="64"
                  width="64"
                  alt=""
                />
                <h1>{P12}</h1>
              </div>
            </div>

            <h1 className="vsText">VS.</h1>

            <div className="mu2duo">
              <div className="mu2p">
                <h1>{P21}</h1>
                <img
                  src={process.env.PUBLIC_URL + C21}
                  height="64"
                  width="64"
                  alt=""
                />
              </div>

              <div className="mu2p">
                <h1>{P22}</h1>
                <img
                  src={process.env.PUBLIC_URL + C22}
                  height="64"
                  width="64"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchStart2;
