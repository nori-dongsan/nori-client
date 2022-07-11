import styled from '@emotion/styled';
import { IcCommunitySearchIcon } from '../../public/assets/icons';

export default function CommunityList() {
  return (
    <StCommunityListWrapper>
      <StSearchBar>
        <input type="text" />
        <IcCommunitySearchIcon />
      </StSearchBar>
      <StCommunityContents>

      </StCommunityContents>
    </StCommunityListWrapper>
  );
}

const StCommunityListWrapper = styled.section``;

const StSearchBar = styled.div`
  display: flex;
  flex-direction: row;

  width: 64.2rem;
  height: 4.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  input {
    width: 60rem;
    height: 2.5rem;

    font-size: 2.5rem;
  }
`;

const StCommunityContents = styled.div`

`;
