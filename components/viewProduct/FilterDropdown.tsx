import styled from '@emotion/styled';

export default function FilterDropdown(categoryInfo: string[]) {
  {
    categoryInfo.map((info) => {
      return (
        <StLabel htmlFor={info}>
          <StInput type="checkbox" id={info} name={info} />
          <p>{info}</p>
        </StLabel>
      );
    });
  }
}

const StInput = styled.input``;
const StLabel = styled.label``;

//https://velog.io/@sgyoon/%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-with-React
//
