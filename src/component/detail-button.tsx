import * as React from "react";
import styled from "styled-components";

interface PropsType {
    style?: React.CSSProperties
}

export function DetailButton(props: PropsType) {
    const {style} = props
    return (
        <Warp style={style}>
            <Text>详情</Text>
            <svg style={{marginLeft: 25}} width="19" height="19" viewBox="0 0 19 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect x="9.19238" y="18.3848" width="3" height="13" rx="1.5" transform="rotate(-135 9.19238 18.3848)"
                      fill="#EEEEEE"/>
                <rect x="18.3848" y="9.19238" width="3" height="13" rx="1.5" transform="rotate(135 18.3848 9.19238)"
                      fill="#EEEEEE"/>
            </svg>
        </Warp>
    )
}

const Warp = styled.div`
  box-sizing: border-box;
  user-select: none;
  width: 153px;
  height: 44px;
  border: #eeeeee 2px solid;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const Text = styled.p`
  font-family: "方正清刻本悦宋";
  font-size: 22px;
  color: #eeeeee;

  margin-left: 43px;
`
