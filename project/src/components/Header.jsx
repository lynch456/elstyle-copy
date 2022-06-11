import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/elstyle_text_logo.png";
const HeaderBlock = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
`;
const HeaderInner = styled.div`
  width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 60px 0;
`;
const Img = styled.img`
  width: 100px;
  height: 70px;
  object-fit: contain;
`;
const Tabs = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  font-size: 16px;
`;
const Tab = styled.div`
  li {
    margin-right: 10px;
    &:hover {
      font-weight: bold;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  li {
    margin-right: 30px;
    &:hover {
      font-weight: bold;
    }
  }
`;
const Fashion = styled.span`
  cursor: pointer;

  font-size: 18px;
  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;
const Lifestyle = styled(Fashion)`
  margin-left: 10px;
`;

function Header() {
  const fashion = [
    { id: 0, name: "ELI'DEN" },
    { id: 1, name: "ELI'DEN PLAY" },
    { id: 2, name: "D'CREWZ" },
    { id: 3, name: "LOTTE TOPS" },
    { id: 4, name: "SNEAKERBAR" },
    { id: 5, name: "SMALT" },
    { id: 6, name: "PARSONS" },
    { id: 7, name: "UNIT" },
  ];
  const lifestyle = [
    { id: 0, name: "동심서당" },
    { id: 1, name: "소공원" },
    { id: 2, name: "여섯시오븐" },
    { id: 3, name: "시시호시" },
    { id: 4, name: "남파고택" },
    { id: 5, name: "집사" },
    { id: 6, name: "TOPS MAISON" },
  ];
  const [menuList, setMenuList] = useState(fashion);

  return (
    <HeaderBlock>
      <HeaderInner>
        <Link to="/">
          <Img src={logo} alt="logo" />
        </Link>
        <Tabs>
          <Tab>
            <Fashion
              onClick={() => {
                setMenuList(fashion);
              }}
            >
              FASHION
            </Fashion>
            <Lifestyle
              onClick={() => {
                setMenuList(lifestyle);
              }}
            >
              LIFESTYLE
            </Lifestyle>
          </Tab>
          <Menu>
            {menuList.map((list) => (
              <li key={list.id}>
                <Link to="#">{list.name}</Link>
              </li>
            ))}
          </Menu>
        </Tabs>
        <div className="lang">
          <Link to="#">KOR</Link>
        </div>
      </HeaderInner>
    </HeaderBlock>
  );
}

export default Header;
