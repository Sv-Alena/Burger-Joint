import "./ReserveTable.css";

function ReserveTable() {
  return (
    <div className="reserv-body">
      <div className="box-reservation">
        <p className="reservInfo">БРОНИРОВАНИЕ</p>
        <h1 className="infoNameReserve">ЗАБРОНИРУЙ СВОЙ СТОЛИК</h1>
      </div>
      <div className="box-input">
        <form className="box-inputReservation">
          <input type="text" placeholder="ИМЯ" required="required" />
          <input type="date" placeholder="ДАТА" required="required" />
          <input
            type="number"
            placeholder="КОЛЛИЧЕСТВО ЛЮДЕЙ"
            required="required"
          />
          <input type="text" placeholder="EMAIL" required="required" />
          <input type="time" placeholder="ВРЕМЯ" required="required" />
          <button>ЗАКАЗАТЬ СТОЛИК</button>
        </form>
      </div>
    </div>
  );
}

export default ReserveTable;
