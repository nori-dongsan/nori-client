export interface ToyData {
  price: number; //가격
  priceCode?: number;
  image: string; //이미지
  siteUrl: string;
  title: string;
  month?: string; //연령
  playHow: number;
  type: number;
  siteName: string;
}

export interface GetCollectionProduct {
  productList: {
    data: { data: { title: string; toyList: ToyData[] } };
  };
  isLoading: boolean;
  isError: string;
}
