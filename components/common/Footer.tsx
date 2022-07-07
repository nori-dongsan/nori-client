import styled from '@emotion/styled';
import { IcNoriFooterLogo } from '../../public/assets/icons';

export default function Footer() {
  return (
    <StFooterWrapper>
      <StFooterContent>
        <StFooterDescription>
          <StIcNoriFooterLogo />
          <p>장난감 대여 플랫폼, 노리</p>
          <p>아이를 위한 장난감을 한눈에 살펴보세요.</p>
        </StFooterDescription>
        <StFooterLinkWrapper>
          <li>Link</li>
          <li>
            <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
              social
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
              privacy policy
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
              team NORI
            </a>
          </li>
        </StFooterLinkWrapper>
      </StFooterContent>
      <span>@ 2022 NORI, INC</span>
    </StFooterWrapper>
  );
}

const StFooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 24.9rem;
  padding: 0 36rem;

  border-top: 0.1rem solid #e2e2e2;
  background-color: #ffffff;

  span:last-child {
    color: #818181;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.1rem;
    text-align: left;
  }
`;

const StFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 18.4rem;
  margin-bottom: 1.6rem;

  border-bottom: 0.1rem solid #e2e2e2;
`;

const StFooterDescription = styled.div`
  color: #818181;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const StFooterLinkWrapper = styled.ul`
  color: #9c9c9c;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;

  li {
    margin-bottom: 1.3rem;
  }
`;

const StIcNoriFooterLogo = styled(IcNoriFooterLogo)`
  margin-bottom: 1.2rem;
`;
