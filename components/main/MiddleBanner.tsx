import styled from '@emotion/styled';
import Link from 'next/link';
import { IcNoriHeaderLogo } from '../../public/assets/icons';

export default function MiddleBanner() {
  return (
    <StBottomLink href="/community">
      <a>
        <IcNoriHeaderLogo />
      </a>
    </StBottomLink>
  );
}

const StBottomLink = styled(Link)`
  & > div {
    width: 100%;
    height: 15.8rem;

    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
