import styled from '@emotion/styled';
import { IcWriteHeaderLogo } from '../../public/assets/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WriteHeader() {
  const { pathname } = useRouter();

  return (
    <StWriteHeaderWrapper>
      <Link href="/community">
        <a>
          <IcWriteHeaderLogo />
        </a>
      </Link>
      {pathname === '/write/[cid]' ? (
        <StModifyBlock>
          <StCancleBtn>취소</StCancleBtn>
          <StWriteBtn>수정완료</StWriteBtn>
        </StModifyBlock>
      ) : (
        <StWriteBtn>등록하기</StWriteBtn>
      )}
    </StWriteHeaderWrapper>
  );
}

const StWriteHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  position: sticky;
  top: -3.2em;

  width: 192rem;
  height: 11.4rem;
  padding-top: 4.2rem;

  background-color: ${({ theme }) => theme.colors.white};

  z-index: 1;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const StWriteBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 11.4rem;

  width: 10rem;
  height: 4.2rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.b2_18_medium_130}

  cursor: pointer;
`;
const StCancleBtn = styled(StWriteBtn)`
  margin-left: 0rem;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mainDarkgreen};

  border: 0.1rem solid ${({ theme }) => theme.colors.mainDarkgreen};
`;
const StModifyBlock = styled.div`
  display: flex;
  gap: 1.4rem;
`;
