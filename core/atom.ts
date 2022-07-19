import { atom, selector, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist'; //페이지가 변경되더라도 상태관리를 유지
import { PostLoginBody, UserData } from '../types/user';
import { FilterDropdownProps, FilterTagProps } from '../types/viewProduct';

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
export const filterListState = atom({
  key: 'filterListState',
  default: {
    filterList: {
      스토어: [
        '국민장난감',
        '그린키드',
        '러브로',
        '리틀베이비',
        '빌리바바',
        '어텐션홈이벤트',
        '장난감점빵',
        '젤리바운스',
        '해피장난감',
      ],
      '사용 연령': [
        '0~5개월',
        '6~11개월',
        '12~17개월',
        '18~23개월',
        '24~35개월',
        '36~47개월',
        '48~60개월',
        '기타',
      ],
      가격: ['1만원 미만', '1-3만원', '3-5만원', '5-8만원', '8만원이상'],
      특성: ['타고 노는', '만지고 노는', '기타'],
      '장난감 종류': [
        '아기체육관',
        '모빌',
        '바운서',
        '쏘서',
        '점퍼루',
        '위고',
        '보행기',
        '걸음마 보조기',
        '러닝홈',
        '러닝테이블',
        '기타 학습완구',
        '미끄럼틀',
        '에어바운스',
        '트램펄린',
        '어린이 자동차',
        '흔들말',
        '그네',
        '소꿉놀이',
        '역할놀이',
        '기타',
      ],
    },
  },
});
export const filterTagState = atom<FilterTagProps[]>({
  key: 'filterTagState',
  default: [],
});
