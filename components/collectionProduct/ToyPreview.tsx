import styled from '@emotion/styled';
import { useState } from 'react';
import {
  IcMainBookmarkSelected,
  IcMainBookmarkUnselected,
} from '../../public/assets/icons';

interface ToyPreviewProps {
  src: string;
  store: string;
  title: string;
  price: number;
  age: string;
}
export default function ToyPreview(props: ToyPreviewProps) {
  const { src, store, title, price, age } = props;
  const [isMark, setIsMark] = useState(false);
  const handleToyMark = () => {
    setIsMark((prev) => !prev);
  };
  return (
    <StToyWrapper>
      <StImgWrapper>
        <StToyImg src={src} />
        <StToyMarkWrapper onClick={handleToyMark}>
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

const StToyWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 27.5rem;
  margin: 0rem 1.25rem;
`;
const StImgWrapper = styled.div`
  position: relative;
`;
const StToyImg = styled.img`
  width: 27.5rem;
  height: 27.5rem;

  object-fit: cover;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.colors.gray002};
`;
const StToyMarkWrapper = styled.div`
  position: absolute;
  top: 1.8em;
  left: 21.8rem;
`;
const StToyMark = styled(IcMainBookmarkUnselected)`
  position: absolute;
  top: 0;
  left: 0;
`;
const StFillToyMark = styled(IcMainBookmarkSelected)`
  position: absolute;
  top: -0.2rem;
  left: -0.1rem;
`;
const StStore = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;

  color: ${({ theme }) => theme.colors.gray006};
  ${({ theme }) => theme.fonts.b3_16_medium_140};
`;
const StTitle = styled.div`
  margin-top: 0.6rem;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.b2_18_medium_130};
`;
const StPrice = styled.div`
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.t3_19_bold_140};
  :after {
    content: '원';
  }
`;
const StAge = styled.div`
  width: fit-content;
  padding: 0.4rem 0.9rem 0.5rem;
  margin-top: 0.4rem;
  gap: 0.2rem;

  background: ${({ theme }) => theme.colors.subYellow};
  border-radius: 0.5rem;
  ${({ theme }) => theme.fonts.b6_13_medium_120};
`;
