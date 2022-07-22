import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import {
  IcViewBookmarkSelected,
  IcViewBookmarkUnselected,
} from '../../public/assets/icons';

interface ToyPreviewProps {
  src: string;
  store: string;
  title: string;
  price: number;
  age?: string;
  siteUrl: string;
}

export default function ToyPreview(props: ToyPreviewProps) {
  const { src, store, title, price, age, siteUrl } = props;
  const [isMark, setIsMark] = useState(false);

  const handleToySite = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof SVGElement)) window.open(siteUrl);
  };

  const handleToyMark = () => {
    setIsMark((prev) => !prev);
  };
  let img = `https://nori-image.s3.ap-northeast-2.amazonaws.com/${src}`;
  return (
    <StToyWrapper onClick={handleToySite}>
      <StImgWrapper>
        <StToyImg src={img} />
        <StToyMarkWrapper onClick={handleToyMark}>
          <StToyMark />
          {isMark && <StFillToyMark />}
        </StToyMarkWrapper>
      </StImgWrapper>
      <StStore>{store}</StStore>
      <StTitle>{title}</StTitle>
      <StPrice>{price.toLocaleString()}</StPrice>
      <StAge isAge={Boolean(age)}>{age}</StAge>
    </StToyWrapper>
  );
}

const StToyWrapper = styled.article`
  display: flex;
  flex-direction: column;

  margin: 0 0 6.3rem 2.4rem;

  cursor: pointer;
`;
const StImgWrapper = styled.div`
  position: relative;
`;
const StToyImg = styled.img`
  width: 22rem;
  height: 22rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 1rem;
`;

const StToyMarkWrapper = styled.div`
  position: absolute;

  top: 1.5rem;
  left: 18.147rem;
`;
const StToyMark = styled(IcViewBookmarkUnselected)`
  position: absolute;
  top: 0;
  left: 0;
`;
const StFillToyMark = styled(IcViewBookmarkSelected)`
  position: absolute;
  top: -0.2rem;
  left: -0.1rem;
`;
const StStore = styled.div`
  width: 22rem;
  height: 2rem;
  margin-top: 1.2rem;

  ${({ theme }) => theme.fonts.b5_14_medium_140};
  color: ${({ theme }) => theme.colors.gray006};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const StTitle = styled.div`
  width: 22rem;
  height: 4.4rem;
  margin-top: 0.4rem;

  ${({ theme }) => theme.fonts.b3_16_medium_140};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StPrice = styled.div`
  width: 22rem;
  height: 2.5rem;
  margin-top: 0.4rem;

  ${({ theme }) => theme.fonts.b2_18_bold_140};

  :after {
    content: '원';
  }
`;

const StAge = styled.div<{ isAge: boolean }>`
  width: fit-content;
  padding: 0.2rem 0.8rem 0.3rem 0.8rem;
  margin-top: 0.3rem;
  background: ${({ theme }) => theme.colors.subYellow};
  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.b7_12_medium_140};
  line-height: 140%;

  ${({ isAge }) =>
    !isAge &&
    css`
      visibility: hidden;
    `}
`;
