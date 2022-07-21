import styled from '@emotion/styled';
import { MainToyData } from '../../types/toy';
import ToyPreview from './ToyPreview';

interface CollectionListProps {
  toyList: MainToyData[];
}

export default function CollectionList(props: CollectionListProps) {
  const { toyList } = props;
  return (
    <StToyListWrapper>
      {toyList.map(({ image, siteName, title, price, month, siteUrl }, idx) => (
        <ToyPreview
          key={idx}
          src={image}
          store={siteName}
          title={title}
          price={price}
          age={month}
          siteUrl={siteUrl}
        />
      ))}
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
`;
