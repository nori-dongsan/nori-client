import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingViewProductBanner() {
  const productIcons = new Array(8).fill(0);
  return (
    <StProductBannerWrapper>
      <h1></h1>
      <StCategoryNav>
        {productIcons.map((_, idx: number) => {
          return (
            <StProductItem>
              <div />
              <p></p>
            </StProductItem>
          );
        })}
      </StCategoryNav>
    </StProductBannerWrapper>
  );
}

const StProductBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 117.6rem;
  margin: 7.1rem 0 0.4rem 0;
  padding: 0 3.6rem 5.4rem 3.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray005};

  & > h1 {
    position: relative;
    width: 9.7rem;
    height: 4.2rem;
    margin-bottom: 3.4rem;

    animation: ${loading} 2s infinite linear;
  }
`;

const StCategoryNav = styled.nav`
  display: flex;
  gap: 3.2rem;

  width: 110.4rem;
  height: 14.4rem;
`;

const StProductItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  & > div {
    width: 11rem;
    height: 11rem;
    background: ${({ theme }) => theme.colors.gray005};
    animation: ${loading} 2s infinite linear;
  }

  & > p {
    width: 7.8rem;
    height: 2.2rem;
    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 0.3rem;
    animation: ${loading} 2s infinite linear;
  }
  cursor: pointer;
`;
