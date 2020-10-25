import prenagen from "../prenagen.jpg";
import "./prenagen.css";
import { useHistory } from "react-router-dom";

function Prenagen() {
  let history = useHistory();
  return (
    <>
      <img src={prenagen} className="Prenagen-main" />
      <iframe
        className="prenagen-video"
        width="420"
        height="315"
        src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&mute=1"
      ></iframe>
      <a href="https://api.whatsapp.com/send?phone=62818800845">
        <button className="prenagen-chat">Chat Now</button>
      </a>
      <button
        className="prenagen-back-to-hall"
        onClick={() => history.push("/")}
      >
        Kembali Ke Hall >
      </button>
      <button
        className="prenagen-detail1"
        onClick={() => history.push("/prenagenDetail")}
      >
        Lihat Detail
      </button>
      <button
        className="prenagen-detail2"
        onClick={() => history.push("/prenagenDetail")}
      >
        Lihat Detail
      </button>
      <button
        className="prenagen-detail3"
        onClick={() => history.push("/prenagenDetail")}
      >
        Lihat Detail
      </button>
    </>
  );
}

export default Prenagen;
