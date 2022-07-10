import styled from '@emotion/styled';
import { CategoryProps } from './ProductFilter';

export default function FilterDropdown({ categoryInfo }: CategoryProps) {
  return (
    <StDropdownWrapper>
      {categoryInfo.map((sort: string) => {
        return (
          <StLabel htmlFor={sort}>
            <StInput type="checkbox" id={sort} name={sort} />
            <p>{sort}</p>
          </StLabel>
        );
      })}
    </StDropdownWrapper>
  );
}

const StInput = styled.input``;
const StLabel = styled.label``;
const StDropdownWrapper = styled.div``;
