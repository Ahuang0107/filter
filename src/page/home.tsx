import * as React from "react";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {PhotoBooth} from "../component/photo-booth";
import {
    CoreLogoLink,
    CoreNavigation,
    CoreNavigationItem,
    CoreNavigationLink,
    CoreNavLabel,
    LogoWrap,
    SearchContainer,
    SearchInput,
    SiteSearchPanel,
    UserControls,
    UserControlsAvatar,
    UserControlsItem
} from "../component/header";
import {SearchIcon} from "../component/icon";
import {RESOURCE_URL} from "../util";
import {PopupLayout} from "./popup-layout";

export function Home() {
    // todo 这里可以写一个自定义的hook，来管理整个tNavigation
    const [tabIndex, setTabIndex] = useState(1)
    const [originId, setOriginId] = useState<bigint | null>(null)

    const [filterList, setFilterList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:10110/api/filter/list')
                .then(res => res.json())
                .then(data => setFilterList(data.data))
        }
        fetchData()
    }, [])

    const getAvatar = (num: string) => {
        return RESOURCE_URL + `avatar/${num}.jpg`
    }
    return (
        <>
            <Wrap>
                <Header>
                    <CoreNavigation>
                        <CoreNavigationItem>
                            <CoreLogoLink>
                                <LogoWrap>極細濾鏡</LogoWrap>
                            </CoreLogoLink>
                        </CoreNavigationItem>
                        <CoreNavigationItem>
                            <CoreNavigationLink tabIndex={1} selected={tabIndex == 1} onClick={() => setTabIndex(1)}>
                                <CoreNavLabel>滤镜展厅</CoreNavLabel>
                            </CoreNavigationLink>
                        </CoreNavigationItem>
                        <CoreNavigationItem>
                            <CoreNavigationLink tabIndex={2} selected={tabIndex == 2} onClick={() => setTabIndex(2)}>
                                <CoreNavLabel>我的收藏</CoreNavLabel>
                            </CoreNavigationLink>
                        </CoreNavigationItem>
                    </CoreNavigation>
                    <SiteSearchPanel>
                        <SearchContainer>
                            <SearchIcon/>
                            <SearchInput placeholder={"搜索..."}/>
                        </SearchContainer>
                    </SiteSearchPanel>
                    <UserControls>
                        <UserControlsItem>
                            <UserControlsAvatar src={getAvatar("01")}/>
                        </UserControlsItem>
                    </UserControls>
                </Header>
                <Content>
                    <Banner>
                        <p style={{
                            fontFamily: "方正清刻本悦宋",
                            color: "#000000",
                            fontSize: 56,
                            margin: 0
                        }}>极细滤镜</p>
                        <p style={{
                            fontFamily: "方正清刻本悦宋",
                            color: "#000000",
                            fontSize: 18,
                            margin: 0
                        }}>提供丰富的滤镜效果展示与资源下载，成为你的后期想法库，为你提供便利的滤镜浏览与收藏</p>
                    </Banner>
                    <Gallery>
                        {
                            filterList.map(filter => {
                                return (
                                    <GalleryBooth key={filter.id}>
                                        <PhotoBooth key={filter.id} num={filter.id} onClick={setOriginId}/>
                                    </GalleryBooth>
                                )
                            })
                        }
                    </Gallery>
                </Content>
            </Wrap>
            {originId && <PopupLayout id={originId} onClose={setOriginId}/>}
        </>
    )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F6F3EE;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;

  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  flex: 0 0 54px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #ECECEC;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;

  display: flex;
`

const Content = styled.div`
  width: 100%;
  flex: auto;
  background-color: #FFFFFF;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #C4C4C4;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5F5F5F;
  }
`

const Banner = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`

const GalleryBooth = styled.li`
  list-style-type: none;
  padding: 10px;
`
