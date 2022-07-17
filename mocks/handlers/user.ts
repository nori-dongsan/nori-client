import { rest } from 'msw';
import { userMockData } from '../data/userMockData';
import { PostSignUpBody, PostLoginBody } from '../../types/user';
// 로그인
export const postLogin = rest.post('/auth/login', async (req, res, ctx) => {
  const { snsId, provider, email } = req.body as PostLoginBody;

  const user = userMockData.filter(
    (user) =>
      user.snsId === snsId &&
      user.provider === provider &&
      user.email === email,
  );

  if (user.length === 0) {
    return res(ctx.status(401));
  }

  return res(
    // ctx.status(200),
    ctx.json({
      data: {
        accessToken: 'adsda',
        refreshToken: 'asdada',
        isSignup: false,
      },
    }),
  );
});

// 회원가입
export const signUp = rest.post('/auth/signup', (req, res, ctx) => {
  const { nickname } = req.body as PostSignUpBody;
  const userList = userMockData.filter((user) => user.nickname === nickname);

  return userList.length === 0 ? res(ctx.status(201)) : res(ctx.json(409));
});
