import * as React from "react";
import styled from "styled-components";
import {AddButton} from "./button/add-button";
import {getThumbnailImage, toKilo, toRMB} from "../util";
import {Filter} from "../dto";
import {BookmarkCube, BookmarkLrtemplate, BookmarkXmp} from "./bookmark";
import {DownloadIcon, PriceIcon} from "./icon";

interface PropsType {
    filter: Filter
    onClick?: React.Dispatch<React.SetStateAction<bigint>>
}

export function PhotoBooth(props: PropsType) {
    const {filter, onClick} = props
    return (
        <div>
            <CoverWrapper>
                <CoverContent>
                    <CoverContentImg src={getThumbnailImage(filter.id)}/>
                </CoverContent>
                <CoverOverlay onClick={() => onClick(filter.id)}>
                    <CoverOverlayHeaderPanel>
                        <AddButton style={{marginTop: 8, marginLeft: 8}} onClick={() => console.log(filter.id)}/>
                        <BookmarkPanel>
                            <BookmarkXmp style={{marginRight: 8}}/>
                            <BookmarkCube style={{marginRight: 12}}/>
                            <BookmarkLrtemplate style={{marginRight: 12}}/>
                        </BookmarkPanel>
                    </CoverOverlayHeaderPanel>
                    <CoverOverlayTitlePanel>
                        <p style={{
                            fontFamily: "方正清刻本悦宋",
                            color: "#FFFFFF",
                            fontSize: 12,
                            margin: 0,
                        }}>{filter.description}</p>
                    </CoverOverlayTitlePanel>
                </CoverOverlay>
            </CoverWrapper>
            <InfoSlot>
                <p style={{
                    fontFamily: "方正清刻本悦宋",
                    color: "#000000",
                    fontSize: 12,
                    margin: 0,
                }}>{filter.name}</p>
                <CountSlot>
                    <span>
                        <DownloadIcon/>
                    </span>
                    <p style={{
                        fontFamily: "Montserrat",
                        color: "#5F5F5F",
                        fontSize: 10,
                        margin: 0,
                        marginLeft: 5,
                    }}>{toKilo(filter.download)}</p>
                    <span style={{marginLeft: 8}}>
                        <PriceIcon/>
                    </span>
                    <p style={{
                        fontFamily: "Montserrat",
                        color: "#5F5F5F",
                        fontSize: 10,
                        margin: 0,
                        marginLeft: 5,
                    }}>{toRMB(filter.price)}</p>
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
