import "./footer.css";
import React from "react";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="text-center" id="footerr" style={{ paddingTop: "20px" }}>
        <p className="text-center" color="white">
          Need assistance and don't have a way to reach a volunteer? We are
          waiting for your phone call with our volunteer department so that you
          too can appear on the site
        </p>
        <p className="phone">
          <CiPhone color="red" fontSize={"20px"} />
          Contact
        </p>
        <p className="phone">phone number : 054-8459411</p>
        <p className="phone">fax : 03-9023614</p>
      </div>
    </div>
  );
};

export default Footer;
