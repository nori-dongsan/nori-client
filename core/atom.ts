import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'; //페이지가 변경되더라도 상태관리를 유지
import { PostLoginBody, UserData } from '../types/user';

const { persistAtom } = recoilPersist();

export const userInfoState = atom<PostLoginBody>({
  key: 'userInfo',
  default: {
    snsId: 'nori@naver.com',
    provider: 'naver',
    email: 'nori@naver.com',
  },
  effects_UNSTABLE: [persistAtom],
});
