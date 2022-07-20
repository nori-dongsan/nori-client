import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingToyPreview() {
  return (
    <LandingToyWrapper>
      <div className="image"></div>
      <div className="siteName"></div>
      <div className="title"></div>
      <div className="price"></div>
      <div className="month"></div>
    </LandingToyWrapper>
  );
}

const LandingToyWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 27.5rem;
  height: 42.4rem;
  margin: 0rem 1.25rem;

  div {
    animation: ${loading} 2s infinite linear;
  }
  .image {
    height: 27.5rem;

    background: ${({ theme }) => theme.colors.gray004};
  }

  .siteName {
    height: 2.2rem;
    margin-top: 1.4rem;

    background: ${({ theme }) => theme.colors.gray002};
    border-radius: 0.2rem;
  }

  .title {
    height: 4.6rem;
    margin-top: 0.6rem;

    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;
  }

  .price {
    height: 2.7rem;
    margin-top: 0.6rem;

    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;
  }
  .month {
    width: 10.7rem;
    height: 2.5rem;
    margin-top: 0.4rem;

    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;
  }
`;
