import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IcComment, IcHeart, IcMenu } from '../public/assets/icons';

export default function CommunityDetail() {
  const router = useRouter();
  const [isWriter, setIsWriter] = useState<boolean>(true);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { cid } = router.query;

  const handleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  const handleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDelete = () => {
    const val = confirm('삭제하시겠습니까?');
  };

  return (
    <StCommunityMain>
      <StCommunitySection>
        <StCommunityHeader>커뮤니티</StCommunityHeader>
        <StCommunityArticle>
          <StCommunityTitle>
            <span>질문</span>
            <h2>4개월 아이 장난감 추천해주세요!</h2>
          </StCommunityTitle>
          <StCommunityInfoWrapper>
            <StCommunityInfo>
              <span>예현맘</span>
              <span>2022.06.23</span>
            </StCommunityInfo>
            <IcMenu
              css={css`
                cursor: pointer;
              `}
              onClick={handleMenu}
            />
            {isMenu && (
              <StMenuWrapper onClick={handleMenu}>
                {isWriter ? (
                  <StMenuList isWriter={isWriter}>
                    <li>수정하기</li>
                    <li onClick={handleDelete}>삭제하기</li>
                  </StMenuList>
                ) : (
                  <StMenuList isWriter={isWriter}>
                    <li>신고하기</li>
                  </StMenuList>
                )}
              </StMenuWrapper>
            )}
          </StCommunityInfoWrapper>
          <StCommunityContent>
            <StImgWrapper>
              {['1', '2', '3'].map((item) => (
                <StPreviewImg
                  key={item}
                  onClick={handleExpanded}
                  src="https://shop-phinf.pstatic.net/20220517_16/1652795910857kjUHI_JPEG/53931745690420048_1892994417.jpg?type=f295_381"
                  alt={item}
                />
              ))}
            </StImgWrapper>
            <StContent>
              군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한
              군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중
              법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의
              재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....
            </StContent>
            <StReaction>
              <StIconWrapper>
                <IcComment />
                <span>12</span>
              </StIconWrapper>
              <StIconWrapper>
                <IcHeart />
                <span>42</span>
              </StIconWrapper>
            </StReaction>
          </StCommunityContent>
        </StCommunityArticle>
      </StCommunitySection>
      {isExpanded && (
        <StExpandedImgWrapper onClick={handleExpanded}>
          <StExpandedImg
            src="https://shop-phinf.pstatic.net/20220517_16/1652795910857kjUHI_JPEG/53931745690420048_1892994417.jpg?type=f295_381"
            alt="expanded"
          />
        </StExpandedImgWrapper>
      )}
    </StCommunityMain>
  );
}

const StCommunityMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4.6rem;
  padding-bottom: 9.8rem;
`;
const StCommunitySection = styled.section`
  width: 111.9rem;
  margin-bottom: 8.6rem;
`;
const StCommunityHeader = styled.header`
  padding-bottom: 8.3rem;

  color: #000000;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 4.6rem;

  text-align: center;
`;
const StCommunityArticle = styled.article`
  display: flex;
  flex-direction: column;
`;
const StCommunityTitle = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 3.335rem;

  & > span {
    padding: 0.2rem 2.4rem;
    margin-right: 2.5rem;

    border-radius: 4.182rem;
    background-color: #000000;
    color: #ffffff;

    font-weight: 700;
    font-size: 1.952rem;
    line-height: 2.8rem;

    text-align: center;
  }

  & > h2 {
    color: #000000;
    font-weight: 700;
    font-size: 2.788rem;
    line-height: 4rem;
  }
`;
const StCommunityInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  border-bottom: 1.86px solid #d6d6d6;
`;
const StCommunityInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    margin-bottom: 1.394rem;

    color: #000000;
    font-weight: 700;
    font-size: 2.138rem;
    line-height: 2.138rem;
  }

  span:nth-child(2) {
    margin-bottom: 3.346rem;

    color: #929292;
    font-weight: 350;
    font-size: 2.138rem;
    line-height: 2.138rem;
  }
`;
const StCommunityContent = styled.div`
  padding-top: 5rem;
  padding-bottom: 3.383rem;

  border-bottom: 1.86px solid #d6d6d6;
`;
const StImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 3.811rem;

  img:not(:last-child) {
    margin-right: 2.974rem;
  }
`;
const StPreviewImg = styled.img`
  width: 34.295rem;
  height: 34.295rem;

  border: 0.93px solid #bebebe;
  border-radius: 0.929rem;

  object-fit: cover;

  cursor: pointer;
`;
const StContent = styled.p`
  color: #767676;
  font-weight: 400;
  font-size: 2.324rem;
  line-height: 3.5rem;
`;
const StReaction = styled.div`
  display: flex;

  margin-top: 3rem;
`;
const StIconWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-right: 3rem;

  & > span {
    margin-left: 1rem;

    color: #c9c9c9;
    font-weight: 400;
    font-size: 1.85rem;
    line-height: 2.7rem;
  }
`;
const StMenuWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;
const StMenuList = styled.ul<{ isWriter: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${(props) => (props.isWriter ? '8rem' : '6rem')};
  right: -12rem;
  transform: translate(-50%, -50%);

  width: 23.4rem;

  border: 1px solid #bebebe;
  border-radius: 1rem;
  background-color: white;

  li {
    width: 95%;
    height: 4rem;

    background-color: white;
    color: #000000;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.6rem;

    text-align: center;

    cursor: pointer;
  }
`;
const StExpandedImgWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`;
const StExpandedImg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
