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
      <StContentCardList>
        {/* {contentsList.map((content, idx) => (
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
          ))} */}
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
          category="후기"
          title="3살 아가를 위한 쏘서 제품 추천!"
          content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
          userNickname="예현맘"
          createdAt="2022.07.12"
          replyCount={12}
          img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
        />
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
          category="후기"
          title="3살 아가를 위한 쏘서 제품 추천!"
          content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
          userNickname="예현맘"
          createdAt="2022.07.12"
          replyCount={12}
          img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
        />
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
          category="후기"
          title="3살 아가를 위한 쏘서 제품 추천!"
          content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
          userNickname="예현맘"
          createdAt="2022.07.12"
          replyCount={12}
          img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
        />
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
          category="후기"
          title="3살 아가를 위한 쏘서 제품 추천!"
          content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
          userNickname="예현맘"
          createdAt="2022.07.12"
          replyCount={12}
          img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
        />
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
          category="후기"
          title="3살 아가를 위한 쏘서 제품 추천!"
          content="군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한 경비는 법률이 정하는 경우...."
          userNickname="예현맘"
          createdAt="2022.07.12"
          replyCount={12}
          img="https://www.littlebaby.co.kr:14019/shop/data/goods/1632018070797m0.jpg"
        />
      </StContentCardList>
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
const StContentCardList = styled.div`
  display: flex;
  flex-direction: column;
`;
