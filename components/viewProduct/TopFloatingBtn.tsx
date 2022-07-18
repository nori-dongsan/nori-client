import styled from '@emotion/styled';
import { IcTopBtn } from '../../public/assets/icons';

export default function TopFloatingBtn() {
  const handleTopScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <StTopBtn onClick={handleTopScroll} />;
}

const StTopBtn = styled(IcTopBtn)`
  position: fixed;
  bottom: 3rem;
  right: 22.5%;
  left: 77.5%;

  display: block;
  margin-left: 3.4rem;

  z-index: 1;

  cursor: pointer;
`;
