import styled from '@emotion/styled';

export default function ViewProductBanner() {
  return (
    <StViewProductWrapper>
      <h1>상품보기</h1>
      <StCategoryNav></StCategoryNav>
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div``;
const StCategoryNav = styled.nav``;
