import * as React from "react";
import {render} from "react-dom";
import "./style.css";
import "./font.css";
import {Home} from "./page/home";

render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>,
    document.getElementById("react-page")
);
