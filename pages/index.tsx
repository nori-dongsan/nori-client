import {
  MainBanner,
  CollectionCard,
  BottomBanner,
  MiddleBanner,
} from '../components/main';
import styled from '@emotion/styled';
import { ToyList } from '../components/main';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getMainProduct } from '../core/api/toy';
import {
  LandingMainBanner,
  LandingConceptTitle,
  LandingToyList,
  LandingCollectionCard,
  LandingMiddleBanner,
  LandingBottomBanner,
  LandingFooter,
  LandingHeader,
} from '../components/landing/main';
import {
  IcMainBanner,
  IcMainBottomBanner,
  IcMainMiddleBanner,
  IcMainTopBanncer,
} from '../public/assets/icons';
import LocalStorage from '../core/localStorage';

export default function index({
  mainData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
    <div>
      {!mainData ? (
        <>
          {/* <LandingHeader /> */}
          <LandingMainBanner />
          <StMainSection>
            <article className="trending">
              <LandingConceptTitle />
              <LandingToyList landingCategory="popularity" length={3} />
            </article>
            <LandingCollectionCard />
            <article className="noriPick">
              <LandingConceptTitle />
              <LandingToyList landingCategory="noriPick" length={4} />
            </article>
            <LandingMiddleBanner />
            <article className="senses">
              <LandingConceptTitle />
              <LandingToyList landingCategory="noriPick" length={4} />
            </article>

            <article className="smart">
              <LandingConceptTitle />
              <LandingToyList landingCategory="noriPick" length={4} />
            </article>
            <LandingBottomBanner />
          </StMainSection>
          {/* <LandingFooter /> */}
        </>
      ) : (
        <>
          <StBannerWrapper>
            <IcMainTopBanncer />
          </StBannerWrapper>
          <StMainSection>
            <article className="trending">
              <StConceptTitle>이번 주 인기 장난감</StConceptTitle>
              <ToyList
                landingCategory="popularity"
                toyList={mainData.trending}
              />
            </article>

            <StCollectionArticle>
              <StCollectionTitle>테마별 노리 잇템</StCollectionTitle>
              <StCollectionCardWrapper>
                {collection.map(({ title, subTitle }) => (
                  <CollectionCard
                    key={title}
                    title={title}
                    subTitle={subTitle}
                  />
                ))}
              </StCollectionCardWrapper>
            </StCollectionArticle>

            <article className="noriPick">
              <StConceptTitle>Today's NORI PICK</StConceptTitle>
              <ToyList landingCategory="noriPick" toyList={mainData.noriPick} />
            </article>
            <IcMainMiddleBanner />
            <article className="senses">
              <StConceptTitle>우리 아이 오감 발달을 위해</StConceptTitle>
              <ToyList landingCategory="develop" toyList={mainData.senses} />
            </article>

            <article className="smart">
              <StConceptTitle>학습에 도움이 되는 똑똑한 장난감</StConceptTitle>
              <ToyList landingCategory="study" toyList={mainData.smart} />
            </article>
          </StMainSection>
          <IcMainBottomBanner />
        </>
      )}
    </div>
  );
}

const StMainSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-bottom: 12rem;
  .trending {
    margin-top: 7.1rem;
  }
  .noriPick {
    margin-top: 6.5rem;
    margin-bottom: 10rem;
  }
  .senses {
    margin-top: 10rem;
  }
  .smart {
    margin-top: 8rem;
  }
`;
const StBannerWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.mainGreen};
`;
const StCollectionArticle = styled.article`
  width: 100%;
  height: 47.9rem;
  margin-top: 7rem;

  background-color: ${({ theme }) => theme.colors.lightGreen};
`;
const StCollectionCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StConceptTitle = styled.div`
  margin-bottom: 4.3rem;

  ${({ theme }) => theme.fonts.t2_26_semibold_150};
  text-align: center;
`;
const StCollectionTitle = styled(StConceptTitle)`
  padding-top: 7rem;
`;
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await getMainProduct();
  console.log('응답 ', res);
  return {
    props: {
      mainData: '', // res.data.data,
    },
  };
};
