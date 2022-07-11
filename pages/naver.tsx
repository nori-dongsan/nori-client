import Router, { useRouter } from 'next/router';

import axios from 'axios';
import styled from '@emotion/styled';
const Naver = () => {
  const router = useRouter();

  const NaverLogout = async () => {
    // 실제 url은 https://nid.naver.com/oauth2.0/token이지만 proxy를 적용하기 위해 도메인은 제거
    const res = await axios.get('/oauth2.0/token', {
      params: {
        grant_type: 'delete',
        client_id: process.env.NEXT_PUBLIC_NAVER_ID, // Client ID
        client_secret: process.env.NEXT_PUBLIC_NAVER_SECRET, // Clietn Secret
        access_token: router.query.token, // 발급된 Token 정보
        service_provider: 'NAVER',
      },
    });

    if (res) {
      Router.push('/login'); // 로그인 페이지로 이동
    }
  };

  return (
    <Wrapper>
      <Title>Naver Page...</Title>
      <Button onClick={NaverLogout}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default Naver;

const Wrapper = styled.div`
  max-width: 720px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2``;

const Button = styled.button`
  background-color: #19ce60;

  width: 360px;
  height: 40px;

  margin: 6px 0;

  border: none;
  border-radius: 6px;

  cursor: pointer;
`;

const ButtonText = styled.h4`
  margin: 0;
  padding: 0;

  font-size: 18px;
  color: #ffffff;
`;
