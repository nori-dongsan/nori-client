import styled from '@emotion/styled';
export default function ProductFilter() {
  return (
    <StFilterWrapper>
      <StFilterHeader>
        <h2>필터</h2>
        <button>모두 해제</button>
      </StFilterHeader>
      <StFilterSection>
        <h2>스토어</h2>
        <p>모든 스토어</p>
        <button>+</button>
      </StFilterSection>
      <StFilterSection>
        <h2>개월 수</h2>
        <p>모든 개월 수</p>
        <button>+</button>
      </StFilterSection>
      <StFilterSection>
        <h2>가격</h2>
        <p>모든 개월 수</p>
        <button>+</button>
      </StFilterSection>
      <StFilterSection>
        <h2>놀이 방법</h2>
        <p>모든 놀이방법</p>
        <button>+</button>
      </StFilterSection>
      <StFilterSection>
        <h2>카테고리</h2>
        <p>모든 카테고리</p>
        <button>+</button>
      </StFilterSection>
    </StFilterWrapper>
  );
}

const StFilterWrapper = styled.div``;
const StFilterSection = styled.section``;
const StFilterHeader = styled.div``;
