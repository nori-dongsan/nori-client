import styled from '@emotion/styled';
import { IcMainBanner } from '../../public/assets/icons';
export default function MainBanner() {
  return (
    <StMainBannerWrapper>
      <IcMainBanner />
    </StMainBannerWrapper>
  );
}

const StMainBannerWrapper = styled.aside`
  height: 37.8rem;

  background-color: #31cc94;
`;
