import * as React from "react";
import {useState} from "react";
import styled from "styled-components";
import avatar from "../../public/image/avatar/avatar-25px.jpg";
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
import {SearchIcon} from "../component/icon/search";
import {RESOURCE_URL} from "../util";

export function Home() {
    // todo 这里可以写一个自定义的hook，来管理整个tNavigation
    const [tabIndex, setTabIndex] = useState(1)

    const getThumbnail = (num: string) => {
        return RESOURCE_URL + `thumbnail-${num}.jpg`
    }
    return (
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
                        <UserControlsItem>
                            <UserControlsAvatar src={avatar}/>
                        </UserControlsItem>
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
                        ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"].map((num) => {
                            return (
                                <GalleryBooth>
                                    <PhotoBooth src={getThumbnail(num)}/>
                                </GalleryBooth>
                            )
                        })
                    }
                </Gallery>
            </Content>
        </Wrap>
    )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F6F3EE;

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
