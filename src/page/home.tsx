import * as React from "react";
import {DetailButton} from "../component/detail-button";
import exampleSrc from "../asset/image/example-01/original.png";
import styled from "styled-components";

export function Home() {
    return (
        <Wrap>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#eeeeee",
                fontSize: 96,
                position: "absolute",
                top: 340,
                left: 120
            }}>电影质感</p>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#eeeeee",
                fontSize: 18,
                position: "absolute",
                top: 500,
                left: 120
            }}>表现电影质感的滤镜，适合原本高调甚至过曝的照片，还可以充分表现出巴拉巴拉的效果</p>
            <DetailButton/>
        </Wrap>
    )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${exampleSrc}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
