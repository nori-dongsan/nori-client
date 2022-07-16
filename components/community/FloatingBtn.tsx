import styled from '@emotion/styled';
import {
  IcDetailHeart,
  IcDetailReply,
  IcDetailTop,
} from '../../public/assets/icons';

interface FloatingBtnProps {
  heartNum: number;
  replyNum: number;
}

export default function FloatingBtn(props: FloatingBtnProps) {
  const { heartNum, replyNum } = props;

  const handleTopScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StFloatingBtnWrapper>
      <StIconWrapper>
        <IcDetailHeart />
        <span>{heartNum}</span>
      </StIconWrapper>
      <StIconWrapper>
        <IcDetailReply />
        <span>{replyNum}</span>
      </StIconWrapper>
      <IcDetailTop onClick={handleTopScroll} />
    </StFloatingBtnWrapper>
  );
}

const StFloatingBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  align-items: center;
  position: sticky;
  top: 43rem;

  height: 30rem;
  margin-left: 8.4rem;

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
`;
