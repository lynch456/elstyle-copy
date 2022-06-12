import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  .title {
    font-size: 28px;
    text-align: center;
    margin: 30px 0;
  }
`;

const MainInner = styled.div`
  width: 100%;
  display: flex;
`;
const LeftContainer = styled.div`
  border-right: thin solid black;
  padding-right: 50px;
`;
const RightContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
`;
const BannerImg = styled.div`
  width: 425px;
  height: 425px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const MagazineImg = styled.div`
  width: 350px;
  height: 350px;

  margin-bottom: 300px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .magazin-info {
    width: 100%;
    text-align: left;
  }
  .magazin-info p:nth-child(1) {
    font-size: 23px;
    font-weight: bold;
    padding: 20px 0;
  }
  .magazin-info p:nth-child(2),
  .magazin-info p:nth-child(3) {
    font-size: 14px;
    padding: 10px 0;
  }
`;
function Main() {
  const LeftContentList = [
    {
      id: 0,
      src: require("../assets/20220524PM14650_3552.jpeg"),
    },
    {
      id: 1,
      src: require("../assets/20220524AM114049_3333.jpeg"),
    },
    {
      id: 2,
      src: require("../assets/20220520PM40911_9093.jpeg"),
    },
  ];
  const RightContentList = [
    {
      id: 0,
      src: require(`../assets/20220520PM44110_9776.jpg`),
      title: "SISIHOSI Check Kitchen 팝업",
      subTitle: "HIGHLIGHT [시시호시]",
      summary: "지금 식탁 위에 산뜻함을 더하세요",
    },
    {
      id: 1,
      src: require(`../assets/20220520PM35322_6060.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 2,
      src: require(`../assets/20220520PM33649_4641.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 3,
      src: require(`../assets/20220519PM61447_8535.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 4,
      src: require(`../assets/20220516PM120600_2839.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 5,
      src: require(`../assets/20220516AM112204_6792.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 6,
      src: require(`../assets/20220516AM104951_3529.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 7,
      src: require(`../assets/20220506PM62536_7017.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 8,
      src: require(`../assets/20220504PM64126_6299.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
    {
      id: 9,
      src: require(`../assets/20220516PM120228_8932.jpg`),
      title: "나를 더 돋보이게 만드는 컬러",
      subTitle: "STORY [PARSONS]",
      summary: "컬러가 분위기를 만들어요",
    },
  ];
  return (
    <MainContainer>
      <p className="title">
        롯데백화점이 제안하는 감각적인 패션 & 라이프스타일을 만나보세요.
      </p>
      <MainInner>
        <LeftContainer>
          {LeftContentList.map((leftlist) => (
            <BannerImg>
              <Link to="/">
                <img src={leftlist.src} alt="img" key={leftlist.id} />{" "}
              </Link>
            </BannerImg>
          ))}
        </LeftContainer>
        <RightContainer>
          {RightContentList.map((rightlist) => (
            <MagazineImg>
              <Link>
                <img src={rightlist.src} alt="img" key={rightlist.id} />
              </Link>
              <div className="magazin-info">
                <p>{rightlist.title}</p>
                <p>{rightlist.subTitle}</p>
                <p>{rightlist.summary}</p>
              </div>
            </MagazineImg>
          ))}
        </RightContainer>
      </MainInner>
    </MainContainer>
  );
}

export default Main;
