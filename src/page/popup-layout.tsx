import * as React from "react";
import styled from "styled-components";
import {CloseIcon} from "../component/icon";
import {RESOURCE_URL} from "../util";
import {FilterDisplayComponent} from "../component/filter-display-component";

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
                        <FilterDisplayComponent src1={getOrigin("01")} src2={getOrigin("02")} width={1400} height={875}/>
                        <FilterDisplayComponent src1={getOrigin("02")} src2={getOrigin("03")} width={1400} height={875}/>
                        <FilterDisplayComponent src1={getOrigin("03")} src2={getOrigin("01")} width={1400} height={875}/>
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
