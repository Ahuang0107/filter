import * as React from "react";
import {useState} from "react";
import styled from "styled-components";

interface PropsType {
    src1: string,
    src2: string,
    width: number,
    height: number,
}

export function FilterDisplayComponent(props: PropsType) {
    const width = Math.round(props.width)
    const height = Math.round(props.height)
    const [middle, setMiddle] = useState(width / 2)
    return (
        <>
            <Image src={props.src1} width={width} left={0} right={middle} height={height}/>
            <Image src={props.src2} width={width} left={middle} right={width} height={height}/>
        </>
    )
}

const Image = styled.img<{
    left: number,
    right: number,
    height: number
}>`
  position: absolute;
  clip: rect(${(props) => `0px ${props.right}px ${props.height}px ${props.left}px`});
`
