export interface ToyData {
  price: number; //가격
  priceCode: number;
  image: string; //이미지
  siteUrl: string;
  title: string;
  month: Array<number>; //연령
  playHow: number;
  type: number;
}

export interface GetCollectionProduct {
  productList: {
    data: { data: ToyData[] };
  };
  isLoading: boolean;
  isError: string;
}
