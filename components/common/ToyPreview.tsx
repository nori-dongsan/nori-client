import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { IcFillToyMark, IcToyMark } from '../../public/assets/icons';

interface ToyPreviewProps {
  src: string;
  store: string;
  title: string;
  price: number;
  age: string;
  isViewProduct: boolean;
}
export default function ToyPreview(props: ToyPreviewProps) {
  const { src, store, title, price, age, isViewProduct } = props;
  const [isMark, setIsMark] = useState(false);
  const handleToyMark = () => {
    setIsMark((prev) => !prev);
  };
  return (
    <StToyWrapper isViewProduct={isViewProduct}>
      <StImgWrapper>
        <StToyImg
          isViewProduct={isViewProduct}
          src="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
        />
        <StToyMarkWrapper isViewProduct={isViewProduct} onClick={handleToyMark}>
          <StToyMark />
          {isMark && <StFillToyMark />}
        </StToyMarkWrapper>
      </StImgWrapper>
      <StStore>{store}</StStore>
      <StTitle>{title}</StTitle>
      <StPrice>{price}</StPrice>
      <StAge>{age}</StAge>
    </StToyWrapper>
  );
}
const StToyWrapper = styled.article<{ isViewProduct: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isViewProduct }) =>
    isViewProduct
      ? css`
          margin: 0rem 1rem;
        `
      : css`
          margin: 0rem 1.25rem;
        `}
`;
const StImgWrapper = styled.div`
  position: relative;
`;

const StToyImg = styled.img`
  width: 27.5rem;
  height: 27.5rem;

  border: 0.1rem solid #e2e2e2;
  border-radius: 0.8rem;
`;

const StToyMarkWrapper = styled.div<{ isViewProduct: boolean }>`
  position: absolute;
  ${({ isViewProduct }) =>
    isViewProduct
      ? css`
          top: 1.2rem;
          left: 19rem;
        `
      : css`
          top: 1.7rem;
          left: 23.6rem;
        `}
`;
const StToyMark = styled(IcToyMark)`
  position: absolute;
  top: 0;
  left: 0;
`;
const StFillToyMark = styled(IcFillToyMark)`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
`;
const StStore = styled.div`
  width: 22.4rem;
  margin-top: 1.6rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: #a9a9a9;
`;

const StTitle = styled.div`
  width: 22.4rem;
  margin-top: 0.8rem;
  font-weight: 400;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: #000000;
`;

const StPrice = styled.div`
  width: 22.4rem;
  margin-top: 1.3rem;
  font-weight: 700;
  font-size: 1.9rem;
  :after {
    content: '원';
  }
`;

const StAge = styled.div`
  width: fit-content;
  padding: 0.3rem 1rem 0.4rem;
  margin-top: 0.8rem;
  background: #ffe766;
  border-radius: 0.4rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 141%;
`;
