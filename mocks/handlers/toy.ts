import { rest } from 'msw';
import { toyMockData } from '../data/toyMockData';
import { ToyData } from '../../types/toy';

// 장난감 리스트 조회 (메인뷰)
export const getHome = rest.get('/home', (req, res, ctx) =>
  res(ctx.json(toyMockData)),
);

// 장난감 컬렉션 별 조회
export const getToyCollection = rest.get('/collection', (req, res, ctx) => {
  const theme = req.url.searchParams.get('theme');
  const sort = req.url.searchParams.get('sort');

  // 낮은 가격 순
  function priceDesc(a: ToyData, b: ToyData) {
    if (a.price == b.price) {
      return 0;
    }
    return a.price > b.price ? 1 : -1;
  }
  // 높은 가격 순
  function priceAsc(a: ToyData, b: ToyData) {
    if (a.price == b.price) {
      return 0;
    }
    return a.price < b.price ? 1 : -1;
  }
  return sort === 'price-desc'
    ? res(ctx.json({ data: toyMockData.sort(priceDesc) }))
    : res(ctx.json({ data: toyMockData.sort(priceAsc) }));
});

// 장난감 검색 및 필터 리스트 조회
// 필터 검증 로직은 영이 로직 짜고 생각해봐야할 것같아
// export const getToyList = rest.get('/toy/list', (req, res, ctx) => {
//   const search = req.url.searchParams.get('search');
//   const type = req.url.searchParams.get('type');
//   const month = req.url.searchParams.getAll('month');
//   const price = req.url.searchParams.get('price');
//   const playHow = req.url.searchParams.get('playHow');
//   const category = req.url.searchParams.get('category');

//   const toyList = toyMockData.filter(
//     (toy) =>
//       toy.title.includes(`${search}`) &&
//       toy.type === Number(type) &&
//       toy.price <= Number(price) &&
//       toy.playHow === Number(playHow),
//   );
//   return res(ctx.json(toyList));
// });
