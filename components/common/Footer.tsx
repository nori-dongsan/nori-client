import styled from '@emotion/styled';
import { IcNoriFooterLogo } from '../../public/assets/icons';

export default function Footer() {
  return (
    <StFooterWrapper>
      <StFooterContent>
        <StFooterDescription>
          <StIcNoriFooterLogo />
          <p>장난감 대여 비교 플랫폼, NORI</p>
          <p>아이를 위한 장난감을 한눈에 살펴보세요</p>
        </StFooterDescription>
        <StFooterLinkWrapper>
          <li>
            <a target="_blank" href="" rel="noreferrer">
              social
            </a>
          </li>
          <li>
            <a target="_blank" href="" rel="noreferrer">
              privacy policy
            </a>
          </li>
          <li>
            <a target="_blank" href="" rel="noreferrer">
              team NORI
            </a>
          </li>
        </StFooterLinkWrapper>
      </StFooterContent>
      <StFooterCopyRight>
        <span>© 2022 nori, Inc.</span>
      </StFooterCopyRight>
    </StFooterWrapper>
  );
}

const StFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;

  width: 100%;
  height: 24.9rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  background-color: ${({ theme }) => theme.colors.gray001};

  span:last-child {
    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b7_12_regular_120}
  }
`;
const StFooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 117.6rem;
  height: 18.4rem;
  padding-right: 7.487rem;
  margin-bottom: 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray005};
`;
const StFooterDescription = styled.div`
  padding-top: 4.1rem;

  color: ${({ theme }) => theme.colors.gray006};

  & > p {
    ${({ theme }) => theme.fonts.b7_12_medium_140}
  }
`;
const StFooterLinkWrapper = styled.ul`
  padding-top: 4.5rem;

  color: ${({ theme }) => theme.colors.gray008};

  & > li {
    margin-bottom: 1.2rem;

    & > a {
      ${({ theme }) => theme.fonts.b3_16_medium_140};
    }
  }
`;
const StIcNoriFooterLogo = styled(IcNoriFooterLogo)`
  margin-bottom: 1.782rem;
`;
const StFooterCopyRight = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 117.6rem;
`;
