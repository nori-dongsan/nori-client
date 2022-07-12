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
        <select>
          <option value="모든 글">모든 글</option>
          <option>정보공유</option>
          <option>후기</option>
          <option>질문</option>
        </select>
        <h1>그린키드 미끄럼틀 아이가 좋아하네요</h1>
        <p>
          군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상
          기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한
          경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지
          아니한다. 선거에 관한 경비는 법률이 정하는 경우....경우와 비상계엄이
          선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 선거에 관한
          경비는 법률이 정하는 경우....
        </p>
        <span>예현맘</span>
        <span>2022.06.23</span>
      </StCommunityContents>
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
const StSearchBar = styled.div`
  display: flex;
  flex-direction: row;

  width: 64.2rem;
  height: 4.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 7.9rem;

  input {
    width: 60rem;
    height: 2.5rem;

    font-size: 2.5rem;
  }
`;

const StCommunityContents = styled.div`
  width: 120rem;
  height: 30.2rem;

  border-bottom: 1px solid #d6d6d6;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 33px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
  }

  span:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
  }
`;
