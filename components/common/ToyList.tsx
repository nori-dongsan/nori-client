import styled from '@emotion/styled';
import keyframes from '@emotion/react';

import ToyPreview from './ToyPreview';

interface ToyListProps {
  landingCategory: string;
  length: number;
}
export default function ToyList(props: ToyListProps) {
  const { landingCategory, length } = props;
  const toyList = new Array(length).fill(0);
  return (
    <StToyListWrapper>
      {toyList.map((_, idx) =>
        landingCategory === 'popularity' ? (
          <StPopularityWrapper key={idx}>
            <ToyPreview
              src="d"
              store="그린키드"
              title="[보행기대여] NEW 뉴 롤링360 플러스 다기능 아기보행기"
              price={12000}
              age="36개월이상"
            />
          </StPopularityWrapper>
        ) : (
          <ToyPreview
            key={idx}
            src="d"
            store="그린키드"
            title="[보행기대여] NEW 뉴 롤링360 플러스 다기능 아기보행기"
            price={12000}
            age="36개월이상"
          />
        ),
      )}
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
`;
const StPopularityWrapper = styled.article`
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;
