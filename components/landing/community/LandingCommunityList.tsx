import styled from '@emotion/styled';
import { LandingContentCard } from '.';
import { loading } from '../../common/styled/animation';

export default function LandingCommunityList() {
  return (
    <StLandingCommunityListWrapper>
      <div className="search" />
      <StBtnWrapper>
        <button type="button" />
      </StBtnWrapper>
      <LandingContentCard />
      <LandingContentCard />
      <LandingContentCard />
      <LandingContentCard />
      <LandingContentCard />
      <LandingContentCard />
    </StLandingCommunityListWrapper>
  );
}

const StLandingCommunityListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 4.8rem;

  & > div.search {
    width: 57.6rem;
    height: 5rem;
    margin-bottom: 5.9rem;

    animation: ${loading} 2s infinite linear;
  }
`;
const StBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  & > button {
    width: 11.9rem;
    height: 4rem;
    margin-bottom: 5.2rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
    background: ${({ theme }) => theme.colors.gray005};

    animation: ${loading} 2s infinite linear;
  }
`;
