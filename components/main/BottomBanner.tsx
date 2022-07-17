import styled from '@emotion/styled';
import Link from 'next/link';
import { IcNoriHeaderLogo } from '../../public/assets/icons';

export default function BottomBanner() {
  return (
    <StBottomLink href="/about">
      <a>
        <IcNoriHeaderLogo />
      </a>
    </StBottomLink>
  );
}

const StBottomLink = styled(Link)`
  & > div {
    width: 100%;
    height: 23.4rem;

    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
