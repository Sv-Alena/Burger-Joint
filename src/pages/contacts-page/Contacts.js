import "./Contacts.css";
import React from "react";
import IconGeo from "./component/geo/icon-geo";
import IconPhone from "./component/phone/icon-phone";
import IconParking from "./component/parking/icon-parking";
import IconDelivery from "./component/delivery/icon-delivery";

function Contacts() {
  return (
    <div className="box-contact">
      <h2>Контакты</h2>
      <div className="contact_info-icons">
        <div className="contact_icons">
        <div><IconGeo /></div>
        <div><IconPhone /></div>
        <div><IconDelivery /></div>
        <div><IconParking /></div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Contacts;
