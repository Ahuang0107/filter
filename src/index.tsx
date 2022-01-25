import * as React from "react";
import {render} from "react-dom";
import {FilterDisplayComponent} from "./component/filter-display-component";
import image1 from './asset/DH2A0166_2.jpg';
import image2 from './asset/DH2A0166_3.jpg';

render(
    <>
        <FilterDisplayComponent src1={image1}
                                src2={image2}
                                width={750}
                                height={500}/>
    </>,
    document.getElementById("react-page")
);
