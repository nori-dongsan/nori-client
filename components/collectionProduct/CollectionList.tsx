import styled from '@emotion/styled';
import { ToyData } from '../../types/toy';

import ToyPreview from './ToyPreview';

interface CollectionListProps {
  toyList: ToyData[];
}
export default function CollectionList(props: CollectionListProps) {
  const { toyList } = props;
  return (
    <StToyListWrapper>
      {toyList.map((toy, idx) => (
        <ToyPreview
          key={idx}
          src={toy.image}
          store="그린키드"
          title={toy.title}
          price={toy.price}
          age="36개월이상"
        />
      ))}
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
`;
