import * as React from "react";
import {render} from "react-dom";
import {FilterDisplayComponent} from "./component/filter-display-component";
import image1 from './asset/DH2A0166_1.jpg';
import image2 from './asset/DH2A0166_2.jpg';
import image3 from './asset/DH2A0150_1.jpg';
import image4 from './asset/DH2A0150_2.jpg';
import image5 from './asset/DH2A0110_1.jpg';
import image6 from './asset/DH2A0110_2.jpg';

render(
    <>
        <FilterDisplayComponent src1={image1}
                                src2={image2}
                                width={1024}
                                height={683}/>
        <FilterDisplayComponent src1={image3}
                                src2={image4}
                                width={1024}
                                height={683}/>
        <FilterDisplayComponent src1={image5}
                                src2={image6}
                                width={1024}
                                height={683}/>
    </>,
    document.getElementById("react-page")
);
