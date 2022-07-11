import styled from '@emotion/styled';
import { CommunityList } from '../components/community';

export default function community() {
  return <StCommunityWrapper>
  <StCommunityTitle>커뮤니티</StCommunityTitle>
    <CommunityList />
    </StCommunityWrapper>
}

const StCommunityWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StCommunityTitle = styled.h1`
  margin-top: 7.7rem;
  margin-bottom: 9.6rem;

  ${({ theme }) => theme.fonts.t1_28_medium_150};
`