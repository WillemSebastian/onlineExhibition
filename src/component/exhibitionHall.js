import exhibitionHall from "../exhibitionHall.jpg";
import "./exhibitionHall.css";
import { Link, useHistory } from "react-router-dom";

function ExhibitionHall() {
  let history = useHistory();
  return (
    <>
      <img src={exhibitionHall} className="Hall-main" />
      <button
        className="backToLobby"
        onClick={() => history.push("/onlineExhibition")}
      >
        {` < KEMBALI KE LOBBY UTAMA `}
      </button>
      <button
        className="prenagen-booth"
        onClick={() => history.push("/prenagen")}
      >
        KUNJUNGI BOOTH >
      </button>
    </>
  );
}

export default ExhibitionHall;
