import styled from '@emotion/styled';
import { MainToyData } from '../../types/toy';
import ToyPreview from './ToyPreview';

interface ToyListProps {
  landingCategory: string;
  toyList: MainToyData[];
}

export default function ToyList(props: ToyListProps) {
  const { landingCategory, toyList } = props;
  return (
    <StToyListWrapper>
      {toyList.map(({ image, month, price, siteName, siteUrl, title }, idx) =>
        landingCategory === 'popularity' ? (
          <StPopularityWrapper key={idx}>
            <ToyPreview
              image={image}
              siteName={siteName}
              title={title}
              price={price}
              month={month}
              siteUrl={siteUrl}
            />
          </StPopularityWrapper>
        ) : (
          <ToyPreview
            key={idx}
            image={image}
            siteName={siteName}
            title={title}
            price={price}
            month={month}
            siteUrl={siteUrl}
          />
        ),
      )}
    </StToyListWrapper>
  );
}

const StToyListWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StPopularityWrapper = styled.article`
  margin: 0rem 2.1rem;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;
