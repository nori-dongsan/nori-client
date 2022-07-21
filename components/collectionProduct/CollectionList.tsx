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
      {toyList.map(({ image, title, price, month, siteUrl }, idx) => (
        <ToyPreview
          key={idx}
          src={toy.image}
          store={toy.siteName}
          title={toy.title}
          price={toy.price}
          age={toy.month}
          siteUrl={toy.siteUrl}
        />
      ))}
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
`;
