import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 28px;
    text-align: center;
    margin: 30px 0;
  }
`;

const MainInner = styled.div`
  width: 1200px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  padding-right: 20px;
`;
const RightContainer = styled.div`
  background: red;
  border-left: thin solid black;
`;
const BannerImg = styled.img`
  width: 425px;
  height: 425px;
`;

const MagazineImg = styled.img`
  width: 350px;
  height: 350px;
  margin-left: 50px;
  display: inline-block;
`;
function Main() {
  return (
    <MainContainer>
      <p>롯데백화점이 제안하는 감각적인 패션 & 라이프스타일을 만나보세요.</p>
      <MainInner>
        <LeftContainer>
          <Link>
            <BannerImg
              src={require(`../assets/20220524PM14650_3552.jpeg`)}
              alt="img"
            />
          </Link>
          <Link>
            <BannerImg
              src={require(`../assets/20220524AM114049_3333.jpeg`)}
              alt="img"
            />
          </Link>
          <Link>
            <BannerImg
              src={require(`../assets/20220520PM40911_9093.jpeg`)}
              alt="img"
            />
          </Link>
        </LeftContainer>
        <RightContainer>
          <Link>
            <MagazineImg
              src={require(`../assets/20220520PM44110_9776.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220520PM35322_6060.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220520PM33649_4641.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220519PM61447_8535.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220516PM120600_2839.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220516AM112204_6792.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220516AM104951_3529.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220506PM62536_7017.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220504PM64126_6299.jpg`)}
              alt="img"
            />
          </Link>
          <Link>
            <MagazineImg
              src={require(`../assets/20220516PM120228_8932.jpg`)}
              alt="img"
            />
          </Link>
        </RightContainer>
      </MainInner>
    </MainContainer>
  );
}

export default Main;
