import styled from '@emotion/styled';
import { IcWriteHeaderLogo } from '../../public/assets/icons';
import Link from 'next/link';

export default function WriteHeader() {
  return (
    <StWriteHeaderWrapper>
      <Link href="/main">
        <a>
          <IcWriteHeaderLogo />
        </a>
      </Link>
      <StWriteBtn>등록하기</StWriteBtn>
    </StWriteHeaderWrapper>
  );
}

const StWriteHeaderWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  position: sticky;
  top: -3.2rem;

  width: 100%;
  height: 11.4rem;
  margin-top: 4.2rem;

  background-color: ${({ theme }) => theme.colors.white};

  z-index: 1;
`;

const StWriteBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 4.2rem;

  ${({ theme }) => theme.fonts.b2_18_medium_130}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};

  border-radius: 0.5rem;

  cursor: pointer;
`;
