import * as React from "react";
import styled from "styled-components";
import {AddButton} from "./button/add-button";
import {RESOURCE_URL} from "../util";
import {Filter} from "../dto";
import {BookmarkCube, BookmarkLrtemplate, BookmarkXmp} from "./bookmark";

interface PropsType {
    filter: Filter
    onClick?: React.Dispatch<React.SetStateAction<bigint>>
}

export function PhotoBooth(props: PropsType) {
    const {filter, onClick} = props
    const getThumbnail = (id: bigint) => {
        return RESOURCE_URL + `thumbnail/${id}.jpg`
    }
    return (
        <div>
            <CoverWrapper>
                <CoverContent>
                    <CoverContentImg src={getThumbnail(filter.id)}/>
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
