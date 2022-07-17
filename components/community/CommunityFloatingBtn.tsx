import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { IcWriteBtn, IcTopBtn } from '../../public/assets/icons';

export default function CommunityFloatingBtn() {
  const handleTopScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <StCommunityFloatingBtnWrapper>
      <Link href="/write">
        <IcWriteBtn />
      </Link>
      <IcTopBtn onClick={handleTopScroll} />
    </StCommunityFloatingBtnWrapper>
  );
}

const StCommunityFloatingBtnWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  align-items: cetner;
  position: sticky;
  top: 43rem;

  height: 30rem;
  margin-top: 8.8rem;
  margin-left: 3.4rem;

  & > svg {
    cursor: pointer;
  }
`;
