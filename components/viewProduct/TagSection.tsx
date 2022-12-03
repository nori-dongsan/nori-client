import styled from '@emotion/styled';
import Router from 'next/router';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import {
  checkedItemsState,
  currentQueryState,
  filterTagState,
} from '../../core/atom';
import { IcUndoBtn } from '../../public/assets/icons';
import { FilterTagProps, ViewProductProps } from '../../types/viewProduct';
import FilterTag from './FilterTag';

export default function TagSection() {
  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);
  const setcheckedItems = useSetRecoilState<Set<number>[]>(checkedItemsState);
  const resetTagList = useResetRecoilState(filterTagState);
  const setQuery = useSetRecoilState<ViewProductProps>(currentQueryState);
  const handleUndoBtn = () => {
    setcheckedItems([
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
    ]);
    resetTagList();
    setQuery({ categoryId: Router.query.categoryId?.toString() });
  };
  return (
    <StTagSection>
      <StTagWrapper>
        {filterTagList.map(
          ({ categoryIdx, elementIdx, categoryKey, tagText }) => {
            return (
              <FilterTag
                key={`${categoryKey}${tagText}`}
                categoryIdx={categoryIdx}
                elementIdx={elementIdx}
                categoryKey={categoryKey}
                tagText={tagText}
              />
            );
          },
        )}
      </StTagWrapper>
      <StUndoAllTagBtn onClick={handleUndoBtn}>
        <h2>모두 해제</h2>
        <IcUndoBtn />
      </StUndoAllTagBtn>
    </StTagSection>
  );
}

const StTagWrapper = styled.article`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;

  width: 77.6rem;
  height: fit-content;
`;
const StTagSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1.5rem 0;
  margin-left: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray002};
`;
const StUndoAllTagBtn = styled.button`
  display: flex;
  align-items: center;

  padding: 0 0 0 1rem;
  margin-top: 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  color: ${({ theme }) => theme.colors.gray007};
  ${({ theme }) => theme.fonts.b5_14_medium_140};
`;
