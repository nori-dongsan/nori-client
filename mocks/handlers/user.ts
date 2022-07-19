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
    return res(ctx.status(409));
  }

  return res(
    ctx.status(200),
    ctx.json({
      data: {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzbnNJZCI6IjEyMzEyMzEyMyIsImVtYWlsIjoiY3JheW9uQGdtYWlsLmNvbSIsIm5pY2tuYW1lIjpudWxsLCJpYXQiOjE2NTc4MjQ2NDgsImV4cCI6MTY1NzgzMTg0OCwiaXNzIjoibm9yaSJ9.9BjVAPiSf2zFthI-T5FKfA2RDAskm02T_MkhoGrScSY',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzbnNJZCI6IjEyMzEyMzEyMyIsImlhdCI6MTY1NzgyNDUxNiwiZXhwIjoxNjU5MDM0MTE2LCJpc3MiOiJub3JpIn0.oDOPftgMKbyUDV0rWtHW-EhRiHGsnJTrE2YQbkQOoQw',
        isSignup: false,
      },
    }),
  );
});

// 회원가입
export const signUp = rest.put('/auth/signup', (req, res, ctx) => {
  const { nickname } = req.body as PostSignUpBody;
  const userList = userMockData.filter((user) => user.nickname === nickname);

  return userList.length === 0
    ? res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '회원 가입 성공',
        }),
      )
    : res(
        ctx.status(409),
        ctx.json({ success: false, message: '이미 사용중인 닉네임입니다.' }),
      );
});

// 리프레쉬
// export const refreshToken
