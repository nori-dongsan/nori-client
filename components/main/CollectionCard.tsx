import styled from '@emotion/styled';
import Router from 'next/router';
import {
  IcCollectionWalk,
  IcCollectionPeople,
  IcCollectionPlayground,
} from '../../public/assets/icons';

interface CollectionCardProps {
  title: string;
  subTitle: string;
}

export default function CollectionCard(props: CollectionCardProps) {
  const { title, subTitle } = props;

  const handleCollectionPage = () => {
    Router.push({
      pathname: '/collectionProduct',
      query: { collection: `${title}` },
    });
  };
  return (
    <StCardWrapper onClick={handleCollectionPage}>
      {title === '위고, 보행기 모음' && <IcCollectionWalk />}
      {title === '실내 놀이터 추천' && <IcCollectionPlayground />}
      {title === '다인원 장난감 세트' && <IcCollectionPeople />}
      <StSubTitle>{subTitle}</StSubTitle>
      <StTitle>{title}</StTitle>
    </StCardWrapper>
  );
}

const StCardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 37.2rem;
  height: 26.5rem;
  margin: 0rem 1.5rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 1.93473px 1.93473px 48.3683px rgba(29, 185, 129, 0.3);
  cursor: pointer;
`;
const StSubTitle = styled.div`
  margin-top: 2.61rem;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.b3_16_medium_140}
  color : ${({ theme }) => theme.colors.gray008};
`;
const StTitle = styled.div`
  ${({ theme }) => theme.fonts.b1_20_bold_140}
`;
