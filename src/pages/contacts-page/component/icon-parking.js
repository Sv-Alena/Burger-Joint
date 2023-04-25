import "../Contacts.css";

function IconParking() {
  return (
    <div className="contact_icons-parking text-uppercase">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        fill="currentColor"
        class="bi bi-p-square"
        viewBox="0 0 16 16"
        className="contact_icons-animation"
      >
        <path d="M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z" />
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
      </svg>
      <div className="contact_icons-phone-text-icon">
        <p>Своя бесплатная охраняемая парковка</p>
      </div>
    </div>
  );
}
export default IconParking;
