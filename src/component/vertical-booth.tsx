import * as React from "react";
import styled from "styled-components";

interface PropsType {
    index: number
    width: number
    height: number
    src: string
    name: string
    describe: string
}

export function VerticalBooth(props: PropsType) {
    const {index, width, height, src, name, describe} = props
    return (
        <Wrap width={width}>
            <p style={{
                fontFamily: "Montserrat",
                color: "#5F5F5F",
                fontSize: 14,
                textAlign: "left",
                margin: "0 0 8 0"
            }}>{index}</p>
            <img style={{
                objectFit: "cover"
            }} src={src} alt={`${name} example`} width={width} height={height}/>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#000000",
                fontSize: 18,
                textAlign: "left",
                margin: "16 0 0 0"
            }}>{name}</p>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#5F5F5F",
                fontSize: 12,
                textAlign: "left",
                margin: 0
            }}>{describe}</p>
        </Wrap>
    )
}

const Wrap = styled.div<{
    width: number
}>`
  width: ${(props) => props.width}px;
  margin: 0 16px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`
