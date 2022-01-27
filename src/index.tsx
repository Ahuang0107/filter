import * as React from "react";
import {render} from "react-dom";
import "./style.css";
import "./font.css";
import {Home} from "./page/home";

render(
    <Home/>,
    document.getElementById("react-page")
);
