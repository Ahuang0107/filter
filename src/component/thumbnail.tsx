import * as React from "react";
import styled from "styled-components";

interface PropsType {
    backgroundImageSrc: string
    style?: React.CSSProperties
}

export function Thumbnail(props: PropsType) {
    const {style} = props
    return (
        <Wrap backgroundImageSrc={props.backgroundImageSrc} style={style}/>
    )
}

const Wrap = styled.div<{
    backgroundImageSrc: string
}>`
  width: 173px;
  height: 173px;
  background-image: url("${(props => props.backgroundImageSrc)}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 10px;
  box-shadow: 5px 5px 20px 10px #202020;
`
