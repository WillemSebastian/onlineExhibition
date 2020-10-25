import { useHistory } from "react-router-dom";
import PrenagenMommy from "../prenagenMommy.png";
import "./prenagenDetail.css";

function PrenagenDetail() {
  let history = useHistory();
  return (
    <div className="container">
      <div className="element">
        <div>
          <img src={PrenagenMommy} className="prenagenProduct" />
        </div>
        <div>
          <div className="prenagen-title">PRENAGEN mommy emesis</div>
          <div className="prenagen-description">
            Nutrisi lengkap ibu dan buah hati masa mual muntah dengan formula
            PRENAPRO
            <ul>
              <li>
                Tinggi vitamin dan B6 Protein: teruji klinis mengurangi mual dan
                muntah
              </li>
              <li>Zat Besi: Mencegah Pendarahan saat melahirkan</li>
              <li>Asam Folat: Untuk Mencegah Cacat Tabung Syaraf Janin</li>
              <li>
                Tinggi Kalsium: Pembentukan tulang bayi dan kepadatan tulang
                pada ibu
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="back-button"
        onClick={() => history.push("/onlineExhibition")}
      >
        BACK TO BOOTH
      </button>
    </div>
  );
}

export default PrenagenDetail;
