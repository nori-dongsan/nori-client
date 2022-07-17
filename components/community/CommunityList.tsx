import styled from '@emotion/styled';
// import { useState } from 'react';
import { IcCommunitySearchIcon } from '../../public/assets/icons';
import ContentCard from './ContentsCard';
import { CommunityData } from '../../types/community';
import CommunityFloatingBtn from './CommunityFloatingBtn';

interface CommunityListProps {
  contentsList: CommunityData[];
}

export default function CommunityList(props: CommunityListProps) {
  const { contentsList } = props;
export default function CommunityList() {
  // const [category, setCategory] = useState<string>('모든 글');

  return (
    <StCommunityListWrapper>
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
      <StSearchBar>
        <input type="text" placeholder="궁금한 장난감 정보를 검색해보세요:)" />
        <IcCommunitySearchIcon />
      </StSearchBar>
      <StMainArticle>
        <StFloatingBlock />
        <StContentCardList>
          <ContentCard
            category="후기"
            title="3살 아가를 위한 쏘서 제품 추천!"
            content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
            userNickname="예현맘"
            createdAt="2022.07.12"
            replyCount={12}
            img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
          />
          <ContentCard
            category="정보공유"
            title="역시 그린키드 미끄럼틀이 가성비 좋네요"
            content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
            userNickname="예현맘"
            createdAt="2022.07.12"
            replyCount={127}
          />
          <ContentCard
            category="질문"
            title="그린키드 미끄럼틀 아이가 좋아하네요"
            content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
            userNickname="예현맘"
            createdAt="2022.07.12"
            replyCount={3}
            img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
          />
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

  width: 57.6rem;
  height: 4.5rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray008};
  margin-bottom: 7.9rem;

  input {
    margin-left: 0.9rem;

    width: 60rem;
    height: 3.3rem;

    font-size: 2.5rem;

    color: ${({ theme }) => theme.colors.gray006};
    ${({ theme }) => theme.fonts.b10_22_regular_150}

    &::placeholder {
      font-family: Pretandard;
      color: ${({ theme }) => theme.colors.gray006};
      ${({ theme }) => theme.fonts.b10_22_regular_150}
    }

    :focus::placeholder {
      opacity: 0;
    }
  }
  & > svg {
    margin-right: 0.9rem;

    cursor: pointer;
  }
`;
const StMainArticle = styled.article`
  display: flex;
`;

const StFloatingBlock = styled.div`
  width: 9rem;
`;

const StContentCardList = styled.div``;
