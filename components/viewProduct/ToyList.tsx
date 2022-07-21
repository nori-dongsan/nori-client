import styled from '@emotion/styled';
import { ToyData } from '../../types/toy';
import ToyPreview from './ToyPreview';

interface ToyListProps {
  toyList: ToyData[];
}

export default function ToyList(props: ToyListProps) {
  const { toyList } = props;

  return (
    <StToyListWrapper>
      {toyList.map(({ image, title, price, month, link, toySite }, idx) => (
        <ToyPreview
          key={idx}
          src={image}
          store={toySite.toySite}
          title={title}
          price={price}
          age={month}
          siteUrl={link}
        />
      ))}
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
