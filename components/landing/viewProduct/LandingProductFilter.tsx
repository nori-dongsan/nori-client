import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingProductFilter() {
  const filterList = new Array(5).fill(0);

  return (
    <StLadingFilterWrapper>
      {filterList.map((_, idx: number) => (
        <>
          <article className="filter"></article>
          <div />
        </>
      ))}
    </StLadingFilterWrapper>
  );
}
const StLadingFilterWrapper = styled.div`
  width: 20rem;
  height: 28rem;
  padding-left: 1.2rem;

  & > article.filter {
    width: 20rem;
    height: 2.2rem;
    margin: 1.7rem 0rem;
    border-radius: 0.3rem;
    background: ${({ theme }) => theme.colors.gray003};
    animation: ${loading} 2s infinite linear;
  }

  & > div {
    width: 20rem;
    height: 0.1rem;

    background: ${({ theme }) => theme.colors.gray005};

    animation: ${loading} 2s infinite linear;
  }
`;
