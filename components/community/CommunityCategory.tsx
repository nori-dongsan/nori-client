import styled from '@emotion/styled';

interface CommunityCategoryProps {
  category: string;
}

export default function CommunityCategory(props: CommunityCategoryProps) {
  const { category } = props;

  return (
    <>
      {category === '후기' ? (
        <StCategoryReview>{category}</StCategoryReview>
      ) : category === '질문' ? (
        <StCategoryQuestion>{category}</StCategoryQuestion>
      ) : (
        <StCategoryInfo>{category}</StCategoryInfo>
      )}
    </>
  );
}

const StCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.6rem;
  height: 2.6rem;

  border-radius: 1.9rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.b5_14_medium_140}
`;
const StCategoryReview = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};
`;
const StCategoryQuestion = styled(StCategory)`
  color: ${({ theme }) => theme.colors.gray009};
  background-color: ${({ theme }) => theme.colors.subYellow};
`;
const StCategoryInfo = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.mainGreen};
`;
