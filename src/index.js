import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainHall from "./component/mainHall";
import ExhibitionHall from "./component/exhibitionHall";
import Prenagen from "./component/prenagen";
import PrenagenDetail from "./component/prenagenDetail";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/onlineExhibition" component={MainHall}></Route>
        <Route path="/exhibitionHall" component={ExhibitionHall}></Route>
        <Route path="/prenagen" component={Prenagen}></Route>
        <Route path="/prenagenDetail" component={PrenagenDetail}></Route>
      </Switch>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
