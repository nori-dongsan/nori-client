import styled from '@emotion/styled';
import { IcDeleteTag } from '../../public/assets/icons';
import theme from '../../styles/theme';
import { ProductFilter } from '../../types/viewProduct';

export default function FilterTag(props: ProductFilter) {
  const { tagName } = props;
  return (
    <StFilterTag>
      <h2>{tagName}</h2>
      <StDeleteBtn />
    </StFilterTag>
  );
}
const StFilterTag = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  padding: 0.6rem 0.8rem 0.6rem 1rem;
  margin: 0.5rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray002};
  color: ${({ theme }) => theme.colors.gray009};
  ${({ theme }) => theme.fonts.b5_14_medium_140};
`;
const StDeleteBtn = styled(IcDeleteTag)`
  margin-left: 0.713rem;

  cursor: pointer;
`;
