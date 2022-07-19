import styled from '@emotion/styled';
import Link from 'next/link';
import { IcNoriHeaderLogo } from '../../public/assets/icons';

export default function BottomBanner() {
  return (
    <StBottomBannerWrapper>
      <Link href="/about">
        <a>
          <IcNoriHeaderLogo />
        </a>
      </Link>
    </StBottomBannerWrapper>
  );
}

const StBottomBannerWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 23.4rem;
`;
