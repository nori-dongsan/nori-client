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
  display: flex;
  justify-content: center;
  align-items: center;

  height: 38.9rem;

  background-color: ${({ theme }) => theme.colors.mainGreen};
`;
