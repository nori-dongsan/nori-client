import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Reply } from '../../components/community';
import CommunityCategory from '../../components/community/CommunityCategory';
import DetailFloatingBtn from '../../components/community/DetailFloatingBtn';
import { IcExpandImg, IcMenu, IcWriter } from '../../public/assets/icons';

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
    const val = confirm(
      '삭제하시겠어요? 삭제 시, 해당 글과 댓글은 복구되지 않습니다.',
    );

    if (val) {
      router.push('/community');
    }
  };

  return (
    <StCommunityMain>
      <StDetailSection>
        <StCommunitySection>
          <StCommunityArticle>
            <CommunityCategory category="후기" />
            <StCommunityHeader>
              역시 그린키드 미끄럼틀 아이가 좋아하네요
            </StCommunityHeader>
            <StCommunityInfoWrapper>
              <StCommunityInfo>
                <StNickNameInfo>
                  {isWriter && <IcWriter />}
                  <span>예현맘</span>
                </StNickNameInfo>
                <span>2022.06.23</span>
              </StCommunityInfo>
              <StCommunityMenu>
                <IcMenu
                  css={css`
                    cursor: pointer;
                  `}
                  onClick={handleMenu}
                />
              </StCommunityMenu>
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
                  <StPreviewImgWrapper key={item}>
                    <StPreviewImg
                      src="https://shop-phinf.pstatic.net/20220517_16/1652795910857kjUHI_JPEG/53931745690420048_1892994417.jpg?type=f295_381"
                      alt={item}
                    />
                    <StExpandImgIcon onClick={handleExpanded} />
                  </StPreviewImgWrapper>
                ))}
              </StImgWrapper>
              <StContent>
                군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한
                군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중
                법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는
                군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이
                정하는 경우....
              </StContent>
            </StCommunityContent>
          </StCommunityArticle>
        </StCommunitySection>
        <Reply />
      </StDetailSection>
      <DetailFloatingBtn heartNum={24} replyNum={24} />
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
  justify-content: center;

  padding-top: 7rem;
  padding-bottom: 12rem;
`;
const StDetailSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StCommunitySection = styled.section`
  width: 77.6rem;
  margin-bottom: 5.7rem;
`;
const StCommunityHeader = styled.header`
  margin-top: 1.2rem;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.t5_27_medium_150}
`;
const StCommunityArticle = styled.article`
  display: flex;
  flex-direction: column;
`;
const StCommunityInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray004};
`;
const StCommunityInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.colors.gray006};
    ${({ theme }) => theme.fonts.b5_14_regular_140}
  }
`;
const StNickNameInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  margin-bottom: 0.4rem;

  & > span {
    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.t6_17_medium_130}
  }
`;
const StCommunityMenu = styled.div`
  padding-top: 0.9rem;
`;
const StCommunityContent = styled.div`
  padding-top: 4.5rem;
  padding-bottom: 4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray004};
`;
const StImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.4rem;

  margin-bottom: 3rem;
`;
const StPreviewImgWrapper = styled.div`
  position: relative;

  &:hover {
    & > svg {
      visibility: visible;
    }
  }
`;
const StExpandImgIcon = styled(IcExpandImg)`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;

  visibility: hidden;

  cursor: pointer;
`;
const StPreviewImg = styled.img`
  width: 24.3rem;
  height: 24.3rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 0.6rem;

  object-fit: cover;
`;
const StContent = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.t6_17_regular_170};
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
  position: absolute;
  top: 4.1rem;
  right: 0;

  padding: 1.5rem 1.8rem;
  width: 11.9rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  border-radius: 0.491rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 4.91436px rgba(0, 0, 0, 0.08);

  z-index: 1;

  & > li {
    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b5_14_medium_140}

    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
const StExpandedImgWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 3;
  cursor: pointer;

  background: rgba(31, 34, 32, 0.8);
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
