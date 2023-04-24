import "./Contacts.css";
import React from "react";
import IconGeo from "./component/icon-geo";
import IconPhone from "./component/icon-phone";
import IconParking from "./component/icon-parking";
import IconDelivery from "./component/icon-delivery";

function Contacts() {
  return (
    <div className="box-contact">
      <h2>Контакты</h2>
      <div className="contact_info-icons">
        <div className="contact_icons">
          <IconGeo />
          <IconPhone />
          <IconDelivery />
          <IconParking />
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Contacts;
