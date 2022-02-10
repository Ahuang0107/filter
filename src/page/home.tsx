import * as React from "react";
import styled from "styled-components";
import {VerticalBooth} from "../component/vertical-booth";
import thumbnail01Src from "../../public/image/thumbnail/thumbnail-01.jpg";
import thumbnail02Src from "../../public/image/thumbnail/thumbnail-02.jpg";
import thumbnail03Src from "../../public/image/thumbnail/thumbnail-03.jpg";
import thumbnail04Src from "../../public/image/thumbnail/thumbnail-04.jpg";

export function Home() {
    return (
        <Wrap>
            <Header>
                <p style={{
                    fontFamily: "方正清刻本悦宋",
                    color: "#EA713B",
                    fontSize: 18,
                }}>極細濾鏡</p>
            </Header>
            <Content>
                <Banner>
                    <p style={{
                        fontFamily: "方正清刻本悦宋",
                        color: "#000000",
                        fontSize: 56,
                        textAlign: "left"
                    }}>为你的作品增添<br/>细腻的感情</p>
                </Banner>
                <Gallery>
                    <p style={{
                        fontFamily: "方正清刻本悦宋",
                        color: "#000000",
                        fontSize: 18,
                        textAlign: "left",
                        margin: 56
                    }}>电<br/>影<br/>风<br/>格<br/></p>
                    <VerticalBooth index={1} width={300} height={400} src={thumbnail01Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={2} width={400} height={300} src={thumbnail02Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={3} width={300} height={400} src={thumbnail03Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={4} width={400} height={300} src={thumbnail04Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={5} width={300} height={400} src={thumbnail01Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={6} width={400} height={300} src={thumbnail02Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={7} width={300} height={400} src={thumbnail03Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={8} width={400} height={300} src={thumbnail04Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                </Gallery>
                <Gallery>
                    <p style={{
                        fontFamily: "方正清刻本悦宋",
                        color: "#000000",
                        fontSize: 18,
                        textAlign: "left",
                        margin: 56
                    }}>电<br/>影<br/>风<br/>格<br/></p>
                    <VerticalBooth index={1} width={300} height={400} src={thumbnail01Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={2} width={400} height={300} src={thumbnail02Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={3} width={300} height={400} src={thumbnail03Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={4} width={400} height={300} src={thumbnail04Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={5} width={300} height={400} src={thumbnail01Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={6} width={400} height={300} src={thumbnail02Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={7} width={300} height={400} src={thumbnail03Src} name={"电影风格"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
                    <VerticalBooth index={8} width={400} height={300} src={thumbnail04Src} name={"欧美青橙色调"}
                                   describe={"丰富色彩与细节的滤镜，适合一些阴雨天的街拍，低短调或者低中调的作品"}/>
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
  flex: 0 0 86px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  flex: auto;
  background-color: #F6F3EE;

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
  height: 344px;
  background-color: #F6F3EE;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Gallery = styled.div`
  width: 100%;
  margin-bottom: 32px;
  padding-bottom: 25px;
  background-color: #F6F3EE;

  display: flex;
  flex-direction: row;

  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #C4C4C4;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5F5F5F;
  }
`
