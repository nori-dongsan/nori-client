import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingCommunityDetail() {
  return (
    <StContentsCardWrapper>
      <StContentInfo>
        <div className="category"></div>
        <h1></h1>
        <p></p>
        <div className="write"></div>
        <div className="reply"></div>
      </StContentInfo>
      <div className="imgBox" />
    </StContentsCardWrapper>
  );
}

const StContentsCardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 4.8rem;
  padding-bottom: 4.5rem;

  width: 97.6rem;
  height: auto;

  border-bottom: 0.1rem solid #d6d6d6;

  h1 {
    width: 62.3rem;
    height: 3.6rem;
    margin-bottom: 0.7rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
    background: ${({ theme }) => theme.colors.gray003};

    animation: ${loading} 2s infinite linear;
  }

  p {
    width: 72.5rem;
    height: 4.8rem;
    margin-bottom: 2.7rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
    background: ${({ theme }) => theme.colors.gray003};

    animation: ${loading} 2s infinite linear;
  }
  & > div.imgBox {
    width: 21.8rem;
    height: 21.8rem;

    background: ${({ theme }) => theme.colors.gray005};
    animation: ${loading} 2s infinite linear;
  }
`;
const StContentInfo = styled.section`
  margin-right: 4.9rem;

  width: auto;
  div {
    border-radius: 0.2rem;
    background: ${({ theme }) => theme.colors.gray003};
    animation: ${loading} 2s infinite linear;
  }
  & > div.category {
    width: 7.6rem;
    height: 2.6rem;
    margin-bottom: 2.6rem;
  }

  & > div.write {
    width: 22.1rem;
    height: 2.2rem;
    margin-bottom: 1.2rem;
  }
  & > div.reply {
    width: 13.8rem;
    height: 2.4rem;
    margin-bottom: 3.55rem;
  }
`;
