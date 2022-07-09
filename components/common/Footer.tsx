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
      <span>ⓒ 2022 nori, Inc.</span>
    </StFooterWrapper>
  );
}

const StFooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 24.9rem;
  padding: 0 37.2rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  background-color: ${({ theme }) => theme.colors.white};

  span:last-child {
    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b7_12_regular_120}
  }
`;
const StFooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 18.4rem;
  padding-right: 8.1rem;
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
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;

  & > li {
    margin-bottom: 2.2rem;
  }
`;
const StIcNoriFooterLogo = styled(IcNoriFooterLogo)`
  margin-bottom: 1.8rem;
`;
