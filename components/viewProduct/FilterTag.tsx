import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { filterListState } from '../../core/atom';
import { IcDeleteTag } from '../../public/assets/icons';
import { FilterTagProps } from '../../types/viewProduct';

export default function FilterTag(props: FilterTagProps) {
  const { categoryIdx, elementIdx, categoryKey, tagText } = props;
  const filterlist = useRecoilValue(filterListState);
  const filterListKeys = Object.keys(filterlist.filterList);
  const handleTagDelete = () => {};
  return (
    <StFilterTag>
      <h2>{tagText == '기타' ? `${tagText} (${categoryKey})` : tagText}</h2>
      <StDeleteBtn onClick={() => handleTagDelete} />
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
