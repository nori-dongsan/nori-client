import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { IcNoriHeaderLogo, IcSearchIcon } from '../../public/assets/icons';

export default function Header() {
  const router = useRouter();

  return (
    <StHeaderWrapper>
      <StTopLink>
        <p>
          <a>고객센터</a> | <a>마이페이지</a> | <a>로그인</a>
        </p>
      </StTopLink>
      <StHeaderContents>
        <IcNoriHeaderLogo type="button" onClick={() => router.push('/')} />
        <StSearchWrapper>
          <StSearchBar>
            <input placeholder="상품명, 스토어명을 검색해보세요!" />
            <IcSearchIcon />
          </StSearchBar>
          <StMenu>
            <StMenuBtn type="button" onClick={() => router.push('/toyView')}>
              상품보기
            </StMenuBtn>
            <StMenuBtn type="button" onClick={() => router.push('/community')}>
              커뮤니티
            </StMenuBtn>
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

  background-color: #31cc94;
  color: #ffffff;
`;

const StTopLink = styled.div`
  display: flex;
  align-items: center;

  padding: 0rem;
  padding-top: 0.7rem;
  padding-left: 75%;

  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
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

  background: rgba(255, 255, 255, 0.14);
  border-radius: 0.8rem;

  input {
    height: 2.2rem;
    width: 22rem;

    color: rgba(255, 255, 255, 0.75);
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
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

const StMenuBtn = styled.button`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.8rem;
`;
