import lobby from "../mainLobby.jpg";
import "./mainHall.css";
import { useHistory } from "react-router-dom";

function MainHall() {
  let history = useHistory();
  return (
    <>
      <img src={lobby} className="App-main" />
      <button
        className="App-main-exhibition-hall"
        onClick={() => history.push("/exhibitionHall")}
      >
        GO TO HALL
      </button>
      <button
        className="App-main-registration"
        onClick={() => history.push("/prenagen")}
      >
        REGISTER HERE
      </button>
      <a href="https://us02web.zoom.us/w/83449810871">
        <button className="App-main-zoom">ZOOM LINK</button>
      </a>
    </>
  );
}

export default MainHall;
