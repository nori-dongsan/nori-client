import styled from '@emotion/styled';
import LandingToyPreview from './LandingToyPreview';

interface LandingToyListProps {
  landingCategory: string;
  length: number;
}
export default function LandingToyList(props: LandingToyListProps) {
  const { landingCategory, length } = props;
  const toyList = new Array(length).fill(0);

  return (
    <StLandingWrapper>
      {toyList.map((_, idx) =>
        landingCategory === 'popularity' ? (
          <StLandingPopularityWrapper key={idx}>
            <LandingToyPreview />
          </StLandingPopularityWrapper>
        ) : (
          <LandingToyPreview key={idx} />
        ),
      )}
    </StLandingWrapper>
  );
}
const StLandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StLandingPopularityWrapper = styled.article`
  margin: 0rem 2.1rem;
  transition: all 0.2s linear;
`;
