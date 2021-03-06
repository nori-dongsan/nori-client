import styled from '@emotion/styled';
import { IcHeartBtn, IcReplyBtn, IcTopBtn } from '../../public/assets/icons';

interface DetailFloatingBtnProps {
  heartNum: number;
  replyNum: number;
}

export default function DetailFloatingBtn(props: DetailFloatingBtnProps) {
  const { heartNum, replyNum } = props;

  const handleTopScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleReplyScroll = () => {
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    });
  };

  return (
    <StFloatingBtnWrapper>
      <StIconWrapper>
        <IcHeartBtn />
        <span>{heartNum}</span>
      </StIconWrapper>
      <StIconWrapper>
        <IcReplyBtn onClick={handleReplyScroll} />
        <span>{replyNum}</span>
      </StIconWrapper>
      <IcTopBtn onClick={handleTopScroll} />
    </StFloatingBtnWrapper>
  );
}

const StFloatingBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.6rem;
  position: fixed;
  bottom: 2.6rem;
  right: 22.5%;

  & > svg {
    cursor: pointer;
  }
`;
const StIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.4rem;

  & > span {
    color: ${({ theme }) => theme.colors.gray006};
    ${({ theme }) => theme.fonts.b6_13_medium_120}
  }

  & > svg {
    cursor: pointer;
  }
`;
