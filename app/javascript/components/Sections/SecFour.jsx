import React from "react";
import Contact from "../Contact";
import StoreInfo from "../StoreInfo";
import Quote from "../Quote";
import QLogo from "../QLogo";

const SecFour = () => {
  return (
    <div className="container-fluid" id="third-bg-image">
      <div className="card-deck">
        <div className="container pt-3 contact-bg-deck mt-3">
          <Contact />
          <StoreInfo />
        </div>
      </div>
      <div className="card-deck">
        <div className="container pt-3 contact-bg-deck mt-3">
          <div className="row shadow">
            <QLogo />
            <Quote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecFour;
