import * as React from "react";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {CloseIcon} from "../component/icon";
import {getOriginImage} from "../util";
import {FilterDisplayComponent} from "../component/filter-display-component";

interface PropsType {
    id: bigint | null
    onClose?: React.Dispatch<React.SetStateAction<bigint | null>>
}

export function PopupLayout(props: PropsType) {
    const {id, onClose} = props
    const [originList, setOriginList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:10110/api/filter/origin/' + id)
                .then(res => res.json())
                .then(data => setOriginList(data.data))
        }
        fetchData()
    }, [])

    return (
        <Wrapper>
            <Inner>
                <OverlayWallpaper/>
                <OverLayContent>
                    <Photos>
                        {
                            originList.map((origin, index) => {
                                return (
                                    <FilterDisplayComponent key={index}
                                                            src1={getOriginImage(origin.beforeImage)}
                                                            src2={getOriginImage(origin.afterImage)}
                                                            width={1400}
                                                            height={1400 * origin.height / origin.width}/>
                                )
                            })
                        }
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
