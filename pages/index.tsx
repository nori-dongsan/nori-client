import styled from '@emotion/styled';
import { useRouter } from 'next/router';
export default function index() {
  const router = useRouter();

  return (
    <StIndexWrapper>
      <StBtn type="button" onClick={() => router.push('/main')}>
        메인으로
      </StBtn>
      <StBtn type="button" onClick={() => router.push('/viewProduct')}>
        상품보기로
      </StBtn>

      <StBtn type="button" onClick={() => router.push('/community')}>
        커뮤니티로
      </StBtn>

      <StBtn type="button" onClick={() => router.push('/login')}>
        로그인
      </StBtn>
    </StIndexWrapper>
  );
}

const StIndexWrapper = styled.main`
  heigth: 100%;
`;

const StBtn = styled.button`
  padding: 2rem;
`;
