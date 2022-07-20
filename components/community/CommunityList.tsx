import styled from '@emotion/styled';
// import { useState } from 'react';
import ContentCard from './ContentsCard';
import { CommunityData } from '../../types/community';

interface CommunityListProps {
  contentsList: CommunityData[];
}

export default function CommunityList(props: CommunityListProps) {
  const { contentsList } = props;
  // const [category, setCategory] = useState<string>('모든 글');

  return (
    <StCommunityListWrapper>
      {contentsList.map((content, idx) => (
        <ContentCard
          id={content.id}
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
    </StCommunityListWrapper>
  );
}

const StCommunityListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 97.6rem;

  margin-bottom: 4.8rem;
`;
