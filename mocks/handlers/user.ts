import { rest } from 'msw';
import { userMockData } from '../data/userMockData';
import { PostSignUpBody } from '../../types/user';
// 카카오 로그인
export const getKakao = rest.get(
  '/auth/login/kakao/:nickname',
  (req, res, ctx) => {
    const { nickname } = req.params;
    const user = userMockData.filter(
      (user) => user.provider === 'kakao' && user.nickname === nickname,
    );
    return res(ctx.json(user));
  },
);
// 구글 로그인
export const getGoogle = rest.get(
  '/auth/login/google/:nickname',
  (req, res, ctx) => {
    const { nickname } = req.params;
    const user = userMockData.filter(
      (user) => user.provider === 'google' && user.nickname === nickname,
    );
    return res(ctx.json(user));
  },
);

// 네이버 로그인
export const getNaver = rest.get(
  '/auth/login/naver/:nickname',
  (req, res, ctx) => {
    const { nickname } = req.params;
    const user = userMockData.filter(
      (user) => user.provider === 'naver' && user.nickname === nickname,
    );
    return res(ctx.json(user));
  },
);

// 회원가입
export const signUp = rest.post('/auth/signup', (req, res, ctx) => {
  const { nickname } = req.body as PostSignUpBody;
  const userList = userMockData.filter((user) => user.nickname === nickname);

  return userList.length === 0 ? res(ctx.status(201)) : res(ctx.json(409));
});
