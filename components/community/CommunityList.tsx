import styled from '@emotion/styled';
// import { useState } from 'react';
import ContentCard from './ContentsCard';
import { CommunityData } from '../../types/community';
import CommunityFloatingBtn from './CommunityFloatingBtn';

interface CommunityListProps {
  contentsList: CommunityData[];
}

export default function CommunityList(props: CommunityListProps) {
  const { contentsList } = props;
  // const [category, setCategory] = useState<string>('모든 글');

  return (
    <StCommunityListWrapper>
      <StMainArticle>
        <StFloatingBlock />
        <StContentCardList>
          {contentsList.map((content, idx) => (
            <ContentCard
              key={idx}
              category={content.category}
              title={content.title}
              content={content.content}
              userNickname={content.userNickname}
              createdAt={content.createdAt}
              replyCount={content.replyCount}
              img={content.image}
            />
          ))}
        </StContentCardList>
        <CommunityFloatingBtn />
      </StMainArticle>
    </StCommunityListWrapper>
  );
}

const StCommunityListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 4.8rem;
`;
const StMainArticle = styled.article`
  display: flex;
`;

const StFloatingBlock = styled.div`
  width: 9rem;
`;

const StContentCardList = styled.div``;
