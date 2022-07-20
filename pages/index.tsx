import {
  MainBanner,
  CollectionCard,
  BottomBanner,
  MiddleBanner,
} from '../components/main';
import styled from '@emotion/styled';
import { ToyList } from '../components/main';

export default function main() {
  const collection = [
    {
      title: '위고, 보행기 모음',
      subTitle: '우리 아이 걸음마를 위한',
    },
    {
      title: '실내 놀이터 추천',
      subTitle: '날씨 걱정 없는 우리 집',
    },
    {
      title: '다인원 장난감 세트',
      subTitle: '친구들과 함께',
    },
  ];

  return (
    <>
      <MainBanner />
      <StMainSection>
        <StConceptArticle>
          <StConceptTitle>이번 주 인기 장난감</StConceptTitle>
          <ToyList landingCategory="popularity" length={3} />
        </StConceptArticle>

        <StCollectionArticle>
          <StCollectionTitle>테마별 노리 잇템</StCollectionTitle>
          <StCollectionCardWrapper>
            {collection.map(({ title, subTitle }) => (
              <CollectionCard key={title} title={title} subTitle={subTitle} />
            ))}
          </StCollectionCardWrapper>
        </StCollectionArticle>

        <StConceptArticle>
          <StConceptTitle>Today's NORI PICK</StConceptTitle>
          <ToyList landingCategory="noriPick" length={4} />
        </StConceptArticle>
        <MiddleBanner />
        <StConceptArticle>
          <StConceptTitle>우리 아이 오감 발달을 위해</StConceptTitle>
          <ToyList landingCategory="develop" length={4} />
        </StConceptArticle>

        <StConceptArticle>
          <StConceptTitle>학습에 도움이 되는 똑똑한 장난감</StConceptTitle>
          <ToyList landingCategory="study" length={4} />
        </StConceptArticle>
      </StMainSection>
      <BottomBanner />
    </>
  );
}

const StMainSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const StConceptArticle = styled.article`
  paddind-bottom: 6.9rem;
`;
const StCollectionArticle = styled.article`
  width: 100%;
  height: 47.9rem;
  margin-top: 8.4rem;

  background-color: ${({ theme }) => theme.colors.lightGreen};
`;
const StCollectionCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StConceptTitle = styled.div`
  padding: 6.7rem 0rem;

  ${({ theme }) => theme.fonts.t2_26_semibold_150};
  text-align: center;
`;
const StCollectionTitle = styled(StConceptTitle)`
  padding: 6rem 0rem 4.8rem 0rem;
`;
