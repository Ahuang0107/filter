import * as React from "react";
import styled from "styled-components";

// you can not default a value in type alias,
// because type alias does not exist in runtime,
// so a default value makes no sense
interface PropsType {
    style?: React.CSSProperties,
    text?: string,
    onClick?: () => void
}

export function AddButton(props: PropsType) {

    function onClick(e: React.MouseEvent<HTMLDivElement>) {
        props.onClick()
        e.stopPropagation()
    }

    return (
        <Wrap style={props.style} onClick={onClick}>
            <p style={{
                fontFamily: "方正清刻本悦宋",
                color: "#FFFFFF",
                fontSize: 10,
                margin: 0,
            }}>{props.text ?? "添加"}</p>
        </Wrap>
    )
}

const Wrap = styled.div`
  width: 69px;
  height: 28px;
  border-radius: 14px;
  background-color: rgba(0, 0, 0, 0.6);

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  user-select: none;
  cursor: hand;

  display: flex;
  align-items: center;
  justify-content: center;
`
