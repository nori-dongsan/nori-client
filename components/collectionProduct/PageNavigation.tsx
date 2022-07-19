import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  IcLeftArrow,
  IcLeftArrowFill,
  IcRightArrow,
  IcRightArrowFill,
} from '../../public/assets/icons';
import { MouseEvent } from 'react';

interface PageNavigationProps {
  currentPage: number;
  lastPage: number;
  handleCurrentPage: (nextPage: number) => void;
}

export default function PageNavigation(props: PageNavigationProps) {
  const { currentPage, lastPage, handleCurrentPage } = props;

  const pageArray =
    currentPage % 5 === 0
      ? new Array(5)
          .fill(0)
          .map((_, idx) => (Math.floor(currentPage / 5) - 1) * 5 + idx + 1)
      : lastPage > Math.ceil(currentPage / 5) * 5
      ? new Array(5)
          .fill(0)
          .map((_, idx) => Math.floor(currentPage / 5) * 5 + idx + 1)
      : new Array(lastPage - Math.floor(currentPage / 5) * 5)
          .fill(0)
          .map((_, idx) => Math.floor(currentPage / 5) * 5 + idx + 1);

  const handlePreviousGroupPage = () => {
    handleCurrentPage(pageArray[0] - 1);
  };
  const handleNextGroupPage = () => {
    handleCurrentPage(pageArray[pageArray.length - 1] + 1);
  };

  const handlePageNumber = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    handleCurrentPage(Number(target.innerHTML));
  };
  return (
    <StNavigationWrapper>
      {Math.floor(currentPage / 5) >= 1 && currentPage !== 5 ? (
        <IcLeftArrowFill onClick={handlePreviousGroupPage} />
      ) : (
        <IcLeftArrow />
      )}
      {pageArray.map((page) => (
        <StPageNumberA
          key={page}
          isCurrent={page === currentPage}
          onClick={() => handleCurrentPage(page)}
        >
          {page}
        </StPageNumberA>
      ))}
      {lastPage > Math.ceil(currentPage / 5) * 5 ? (
        <IcRightArrowFill onClick={handleNextGroupPage} />
      ) : (
        <IcRightArrow />
      )}
    </StNavigationWrapper>
  );
}

const StNavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 22.2rem;
  margin-bottom: 12rem;

  cursor: pointer;
`;
const StPageNumberA = styled.a<{ isCurrent: boolean }>`
  ${({ isCurrent }) =>
    isCurrent
      ? css`
          color: #1db981;
        `
      : css`
          color: #787878;
        `};
  ${({ theme }) => theme.fonts.b3_16_medium_140}
`;
