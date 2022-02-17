import * as React from "react";
import styled from "styled-components";
import {BookmarkLr, BookmarkPs} from "./icon";
import {AddButton} from "./button/add-button";
import {RESOURCE_URL} from "../util";

interface PropsType {
    num: string
    onClick?: React.Dispatch<React.SetStateAction<string>>
}

export function PhotoBooth(props: PropsType) {
    const {num, onClick} = props
    const getThumbnail = (num: string) => {
        return RESOURCE_URL + `thumbnail/thumbnail-${num}.jpg`
    }
    return (
        <div>
            <CoverWrapper>
                <CoverContent>
                    <CoverContentImg src={getThumbnail(num)}/>
                </CoverContent>
                <CoverOverlay onClick={() => onClick(num)}>
                    <CoverOverlayHeaderPanel>
                        <AddButton style={{marginTop: 8, marginLeft: 8}} onClick={() => console.log(num)}/>
                        <BookmarkPanel>
                            <BookmarkPs style={{marginRight: 8}}/>
                            <BookmarkLr style={{marginRight: 12}}/>
                        </BookmarkPanel>
                    </CoverOverlayHeaderPanel>
                    <CoverOverlayTitlePanel>
                        <p style={{
                            fontFamily: "方正清刻本悦宋",
                            color: "#FFFFFF",
                            fontSize: 12,
                            margin: 0,
                        }}>渲染清爽舒适的情绪的滤镜，适合中长调的照片，通过添加青色和适当的暖色来增加画面</p>
                    </CoverOverlayTitlePanel>
                </CoverOverlay>
            </CoverWrapper>
            <InfoSlot>
                <p style={{
                    fontFamily: "方正清刻本悦宋",
                    color: "#000000",
                    fontSize: 12,
                    margin: 0,
                }}>青空风格滤镜</p>
                <CountSlot>
                    <p style={{
                        fontFamily: "Montserrat",
                        color: "#5F5F5F",
                        fontSize: 10,
                        margin: 0,
                        marginLeft: 5,
                    }}>1.3K</p>
                    <p style={{
                        fontFamily: "Montserrat",
                        color: "#5F5F5F",
                        fontSize: 10,
                        margin: 0,
                        marginLeft: 5,
                    }}>¥5</p>
                </CountSlot>
            </InfoSlot>
        </div>
    )
}

const CoverWrapper = styled.div`
  position: relative;
  width: 355px;
  height: 278px;
`

const CoverContent = styled.div`
  width: 355px;
  height: 278px;
  border-radius: 5px;
  position: absolute;
`

const CoverOverlay = styled.div`
  width: 355px;
  height: 278px;
  position: absolute;
  opacity: 0;
  transition: opacity .2s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    opacity: 1;
  }
`

const CoverOverlayHeaderPanel = styled.div`
  display: flex;
  justify-content: space-between;
`

const BookmarkPanel = styled.div`

`

const CoverOverlayTitlePanel = styled.div`
  height: 58px;
  border-radius: 5px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`

const CoverContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`

const InfoSlot = styled.div`
  height: 30px;
  width: 355px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CountSlot = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`
