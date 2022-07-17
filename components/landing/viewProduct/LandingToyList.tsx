import styled from '@emotion/styled';
import LandingToyPreview from './LandingToyPreview';

export default function LandingToyList() {
  const toyList = new Array(4).fill(0);
  return (
    <StLandingToyListWrapper>
      {toyList.map((_, idx) => (
        <LandingToyPreview key={idx} />
      ))}
    </StLandingToyListWrapper>
  );
}

const StLandingToyListWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
