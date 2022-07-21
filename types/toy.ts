export interface ToyData {
  id: number;
  title: string;
  price: number; //가격
  priceCd?: number;
  month?: string; //연령
  minMonth: number;
  maxMonth: number;
  link: string;
  playHow: string;
  playHowCd: number;
  image: string; //이미지
  category: string;
  categoryCd: number;
  toySiteCd: number;
  toySite: {
    id: number;
    toySite: string;
  };
}

export interface MainToyData {
  image: string;
  month: string;
  price: number;
  siteName: string;
  siteUrl: string;
  title: string;
}
export interface GetCollectionProduct {
  productList: {
    data: { data: { title: string; toyList: MainToyData[] } };
  };
  isLoading: boolean;
  isError: string;
}
