import body from'./bodyReservTable.jpg'
import './ReserveTable.css'

function ReserveTable(){
    return(<div>
        <div className="reserv-body">
            <img src={body} width='100%' alt='reserve'/>
        </div>

        <div  className="box-reservation">
            <h2 className='reservInfo'>БРОНИРОВАНИЕ</h2>
            <h1 className="infoNameReserve">ЗАБРОНИРУЙ СВОЙ СТОЛИК</h1>
        </div>

    <form className="box-inputReservation">
        <input type='text'placeholder="ИМЯ" required='required'/>
        <input type='text'  placeholder="ДАТА" required='required'/>
        <input type='text' placeholder="КОЛЛИЧЕСТВО ЛЮДЕЙ" required='required'/>
        <input type='text'  placeholder="EMAIL" required='required'/>
        <input type='text' placeholder="ВРЕМЯ" required='required'/>
            {/* <input type='submit' placeholder="ЗАКАЗАТЬ СТОЛИК" required='required'/> */}
        <button>ЗАКАЗАТЬ СТОЛИК</button>
    </form> */
    </div>
    )
}

export default ReserveTable