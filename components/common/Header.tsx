import styled from '@emotion/styled';
import Link from 'next/link';
import { IcNoriHeaderLogo, IcSearchIcon } from '../../public/assets/icons';

export default function Header() {
  return (
    <StHeaderWrapper>
      <StTopLink>
        <p>
          <a>고객센터</a> | <a>마이페이지</a> | <a>로그인</a>
        </p>
      </StTopLink>
      <StHeaderContents>
        <Link href="/">
          <IcNoriHeaderLogo />
        </Link>
        <StSearchWrapper>
          <StSearchBar>
            <input type="text" placeholder="상품명, 스토어명을 검색해보세요!" />
            <IcSearchIcon />
          </StSearchBar>
          <StMenu>
            <Link href="/toyView">
              <StMenuBtn type="button">상품보기</StMenuBtn>
            </Link>
            <Link href="/community">
              <StMenuBtn type="button">커뮤니티</StMenuBtn>
            </Link>
            <StMenuBtn>ABOUT</StMenuBtn>
          </StMenu>
        </StSearchWrapper>
      </StHeaderContents>
    </StHeaderWrapper>
  );
}

const StHeaderWrapper = styled.header`
  position: sticky;
  top: -3.2rem;

  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.white};
`;
const StTopLink = styled.div`
  display: flex;
  align-items: center;

  padding: 0rem;
  padding-top: 0.7rem;
  padding-left: 75%;
  a {
    ${({ theme }) => theme.fonts.b7_12_regular_120}

    &:hover {
      ${({ theme }) => theme.fonts.b7_12_bold_120}
    }
  }
`;
const StHeaderContents = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin-top: 2.9rem;
`;
const StSearchWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 4.8rem;
`;
const StSearchBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 28.5rem;
  height: 4.2rem;

  background: ${({ theme }) => theme.colors.white_opacity_14};
  border-radius: 0.8rem;

  input {
    height: 2.2rem;
    width: 22rem;

    color: ${({ theme }) => theme.colors.white_opacity_75};
    ${({ theme }) => theme.fonts.b3_16_medium_140}

    &::placeholder {
      color: ${({ theme }) => theme.colors.white_opacity_75};
    }

    :focus::placeholder {
      opacity: 0;
    }
  }
`;
const StMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 27.3rem;
  height: 2.6rem;
  gap: 3.2rem;

  line-height: 2.6rem;
`;
const StMenuBtn = styled.a`
  ${({ theme }) => theme.fonts.t4_18_regular_150}

  color: ${({ theme }) => theme.colors.white};

  &:hover {
    ${({ theme }) => theme.fonts.t4_18_semibold_150};
  }
`;
