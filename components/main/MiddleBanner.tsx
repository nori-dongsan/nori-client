import styled from '@emotion/styled';
import Link from 'next/link';
import { IcNoriHeaderLogo } from '../../public/assets/icons';

export default function MiddleBanner() {
  return (
    <StBiddleBannerWrapper>
      <Link href="/community">
        <a>
          <IcNoriHeaderLogo />
        </a>
      </Link>
    </StBiddleBannerWrapper>
  );
}

const StBiddleBannerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 15.8rem;
  margin-top: 6.9rem;
`;
