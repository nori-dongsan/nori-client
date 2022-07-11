import styled from '@emotion/styled';
import ToyPreview from './ToyPreview';

interface ToyListProps {}
export default function ToyList() {
  return (
    <StToyListWrapper>
      <ToyPreview
        src="d"
        store="그린키드"
        title="[보행기대여] NEW 뉴 롤링360 플러스 다기능 아기보행기"
        price={12000}
        age="36개월이상"
      />
      <ToyPreview
        src="d"
        store="그린키드"
        title="[보행기대여] NEW 뉴 롤링360 플러스 다기능 아기보행기"
        price={12000}
        age="36개월이상"
      />
      <ToyPreview
        src="d"
        store="그린키드"
        title="[보행기대여] NEW 뉴 롤링360 플러스 다기능 아기보행기"
        price={12000}
        age="36개월이상"
      />
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
`;
