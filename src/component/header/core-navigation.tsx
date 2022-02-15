import styled from "styled-components";

export const CoreNavigation = styled.ul`
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const CoreNavigationItem = styled.li`
  margin-right: 24px;
  position: relative;
`

export const CoreLogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  box-sizing: border-box;
  user-select: none;
  cursor: hand;
`

export const CoreNavigationLink = styled(CoreLogoLink)<{
    selected: boolean
}>`
  :hover {
    :after {
      opacity: 1;
    }
  }

  ::after {
    opacity: ${props => props.selected ? 1 : 0};
    background-color: #191919;
    content: "";
    height: 2px;
    left: 0;
    right: 0;
    top: 100%;
    position: absolute;

    transform: translateY(-100%);
    transition: transform .15s, opacity .15s, -webkit-transform .15s;
  }
`

export const LogoWrap = styled.p`
  font-family: "Montserrat";
  font-weight: bold;
  color: #000000;
  font-size: 18px;
  margin: 0;
`

export const CoreNavLabel = styled.p`
  font-family: "Montserrat";
  font-weight: bold;
  color: #000000;
  font-size: 18px;
  margin: 0;
`
