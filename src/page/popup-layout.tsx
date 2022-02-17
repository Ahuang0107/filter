import * as React from "react";
import styled from "styled-components";
import {CloseIcon} from "../component/icon";
import {RESOURCE_URL} from "../util";

interface PropsType {
    num: string
    onClose?: React.Dispatch<React.SetStateAction<string>>
}

export function PopupLayout(props: PropsType) {
    const {onClose} = props
    const getOrigin = (num: string) => {
        return RESOURCE_URL + `origin/origin-${num}.jpg`
    }
    return (
        <Wrapper>
            <Inner>
                <OverlayWallpaper/>
                <OverLayContent>
                    <Photos>
                        <Photo src={getOrigin("01")}/>
                        <Photo src={getOrigin("02")}/>
                        <Photo src={getOrigin("03")}/>
                    </Photos>
                </OverLayContent>
            </Inner>
            <Close onClick={() => onClose(null)}>
                <CloseIcon/>
            </Close>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: zoom-out;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
`

const OverlayWallpaper = styled.div`
  opacity: .9;
  background-color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

const OverLayContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Photos = styled.div`
  width: 1400px;
  position: relative;
`

const Photo = styled.img`
  position: relative;
`

const Close = styled.span`
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  position: fixed;
  padding: 5px;
  right: 8px;
  top: 8px;

  cursor: pointer;
`
