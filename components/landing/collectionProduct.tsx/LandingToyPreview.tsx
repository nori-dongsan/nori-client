import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingToyPreview() {
  return (
    <LandingToyWrapper>
      <div className="img"></div>
      <div className="store"></div>
      <div className="title"></div>
      <div className="price"></div>
      <div className="age"></div>
    </LandingToyWrapper>
  );
}

const LandingToyWrapper = styled.article`
  display: flex;
  flex-direction: column;

  & > div {
    width: 275px;
    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;

    animation: ${loading} 2s infinite linear;
  }
  & > div.img {
    height: 27.5rem;

    border-radius: 0;
    background: ${({ theme }) => theme.colors.gray004};
  }
  & > div.store {
    height: 22px;
    margin-top: 1.4rem;

    background: ${({ theme }) => theme.colors.gray002};
  }
  & > div.title {
    height: 46px;
    margin-top: 0.6rem;
  }
  & > div.price {
    height: 2.7rem;
    margin-top: 0.6rem;
  }
  & > div.age {
    width: 10.7rem;
    height: 2.5rem;
    margin-top: 0.4rem;
  }
  cursor: pointer;
`;
