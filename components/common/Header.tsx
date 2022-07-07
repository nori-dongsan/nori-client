import styled from '@emotion/styled';
export default function Header() {
  return <StHeaderWrapper></StHeaderWrapper>;
}

const StHeaderWrapper = styled.header`
  position: sticky;
  padding-top: 32px;
  top: -32px;

  width: 100%;
  height: 11.4rem;

  background-color: #31cc94;
`;
