import styled from '@emotion/styled';
import { LandingToyPreview } from '.';

export default function LandingCollectionList() {
  const toyList = new Array(4).fill(0);
  return (
    <StLandingToyListWrapper>
      {toyList.map((_, idx) => (
        <StToyPriewWrapper key={idx}>
          <LandingToyPreview />
        </StToyPriewWrapper>
      ))}
    </StLandingToyListWrapper>
  );
}

const StLandingToyListWrapper = styled.section`
  display: flex;
`;
const StToyPriewWrapper = styled.section`
  margin: 0 1.25rem 6.5rem;
`;
