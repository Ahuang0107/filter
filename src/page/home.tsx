import * as React from "react";
import {DetailButton} from "../component/detail-button";
import example1Src from "../asset/image/example-01/original.png";
import example2Src from "../asset/image/example-02/original.png";
import example3Src from "../asset/image/example-03/original.png";
import styled from "styled-components";
import {Thumbnail} from "../component/thumbnail";

export function Home() {
    return (
        <Wrap>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#eeeeee",
                fontSize: 96,
                position: "absolute",
                top: 340,
                left: 120,
                margin: 0
            }}>电影质感</p>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#eeeeee",
                fontSize: 18,
                position: "absolute",
                top: 500,
                left: 120,
                width: 550,
                margin: 0
            }}>表现电影质感的滤镜，适合原本高调甚至过曝的照片，还可以充分表现出巴拉巴拉的效果</p>
            <DetailButton style={{
                position: "absolute",
                top: 600,
                left: 120,
            }}/>
            <Thumbnail backgroundImageSrc={example1Src}
                       style={{
                           position: "absolute",
                           bottom: 80,
                           right: 500,
                       }}/>
            <Thumbnail backgroundImageSrc={example2Src}
                       style={{
                           position: "absolute",
                           bottom: 80,
                           right: 280,
                       }}/>
            <Thumbnail backgroundImageSrc={example3Src}
                       style={{
                           position: "absolute",
                           bottom: 80,
                           right: 60,
                       }}/>
        </Wrap>
    )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${example1Src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
