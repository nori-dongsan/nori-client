import styled from '@emotion/styled';
import Router from 'next/router';
import {
  IcKitchenPlay,
  IcMultiToy,
  IcWalkingMachine,
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
      {title === '쏘서, 보행기 모음' && <IcWalkingMachine />}
      {title === '다인원 장난감 추천' && <IcKitchenPlay />}
      {title === '주방놀이 세트' && <IcMultiToy />}
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

  width: 37.1rem;
  height: 26.5rem;
  margin: 0rem 1.5rem 8rem;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0.193473rem 0.193473rem 0.43683rem rgba(29, 185, 129, 0.3);
  cursor: pointer;
`;
const StSubTitle = styled.text`
  margin-top: 1.8rem;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.b3_16_medium_140}
  color : ${({ theme }) => theme.colors.gray008};
`;
const StTitle = styled.text`
  ${({ theme }) => theme.fonts.b1_20_bold_140}
`;
