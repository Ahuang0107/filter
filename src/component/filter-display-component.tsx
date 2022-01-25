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
    const [down, setDown] = useState(false)
    const [downX, setDownX] = useState(0)
    return (
        <div onMouseDown={(e) => {
            setDown(true)
            setDownX(e.clientX)
        }} onMouseMove={(e) => {
            if (down) {
                const moveX = e.clientX - downX
                setDownX(e.clientX)
                setMiddle(middle + moveX)
            }
        }} onMouseUp={() => {
            setDown(false)
        }} onMouseLeave={() => {
            setDown(false)
        }} style={{position: "relative", width: width, height: height}}>
            <Image src={props.src1} width={width} left={0} right={middle} height={height} draggable={false}/>
            <Image src={props.src2} width={width} left={middle} right={width} height={height} draggable={false}/>
        </div>
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
