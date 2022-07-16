import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';
export default function LandingToyPreview() {
  return (
    <LandingToyWrapper>
      <div className="img"></div>
      <div className="store"></div>
      <div className="price"></div>
      <div className="age"></div>
    </LandingToyWrapper>
  );
}
const LandingToyWrapper = styled.article`
  display: flex;
  flex-direction: column;

  margin: 0 0 6.3rem 2.4rem;

  & > div.img {
    width: 22rem;
    height: 22rem;
    background: ${({ theme }) => theme.colors.gray005};
    animation: ${loading} 2s infinite linear;
  }

  & > div.store {
    width: 20.7rem;
    height: 4.1rem;
    margin-top: 3.6rem;

    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;

    animation: ${loading} 2s infinite linear;
  }

  & > div.price {
    width: 11.8rem;
    height: 2.5rem;
    margin-top: 0.7rem;
    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;

    animation: ${loading} 2s infinite linear;
  }

  & > div.age {
    width: 7.6rem;
    height: 2.2rem;
    margin-top: 0.3rem;
    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.2rem;

    animation: ${loading} 2s infinite linear;
  }
  cursor: pointer;
`;
