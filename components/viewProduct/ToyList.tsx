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
      {toyList.map(({ image, title, price, month, siteUrl }, idx) => (
        <ToyPreview
          key={idx}
          src={image}
          store="그린키드그린키드그린키드그린키드그린키드그린키드그린키드그린키드그린키드그린키드"
          title={title}
          price={price}
          age="36개월이상"
          siteUrl={siteUrl}
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
