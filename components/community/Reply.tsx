import styled from '@emotion/styled';
import ReplyContent from '../community/ReplyContent';
import { useState } from 'react';

export default function Reply() {
  const [inputColor, setInputColor] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>('');

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };

  const handleInputColor = () => {
    replyText.length === 0 ? setInputColor(false) : setInputColor(true);
  };

  return (
    <StReplyWrapper>
      <StReplyTitle>
        <h1>댓글</h1>
        <p>23</p>
      </StReplyTitle>
      <StInputForm>
        <StInputContent inputColor={inputColor}>
          <input
            type="text"
            placeholder="댓글을 남겨 보세요"
            onKeyUp={handleInputColor}
            onChange={handleInputText}
          />
        </StInputContent>
        <StInputBtn inputColor={inputColor}>등록</StInputBtn>
      </StInputForm>
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
    </StReplyWrapper>
  );
}

const StReplyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StReplyTitle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-bottom: 2.3rem;

  ${({ theme }) => theme.fonts.t3_19_medium_130}

  h1 {
    margin-right: 0.4rem;

    color: ${({ theme }) => theme.colors.black};
  }

  p {
    color: ${({ theme }) => theme.colors.mainDarkgreen};
  }
`;
const StInputForm = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4.8rem;

  width: 77.6rem;
`;
const StInputContent = styled.div<{ inputColor: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-right: 2.4rem;
    padding-left: 1.8rem;

    width: 67.6rem;
    height: 4.2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 21.3762px;
    line-height: 31px;

    color: ${({ theme }) => theme.colors.black};

    ${({ theme }) => theme.fonts.b4_15_regular_146};

    border: 0.1rem solid
      ${({ theme, inputColor }) =>
        !inputColor ? theme.colors.gray007 : theme.colors.mainDarkgreen};
    border-radius: 0.65rem;

    &::placeholder {
      font-family: Pretendard;

      color: ${({ theme }) => theme.colors.gray005};
    }
  }
`;
const StInputBtn = styled.span<{ inputColor: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.6rem;
  height: 4.2rem;

  color: ${({ theme, inputColor }) =>
    !inputColor ? theme.colors.gray006 : theme.colors.white};

  background-color: ${({ theme, inputColor }) =>
    !inputColor ? theme.colors.gray003 : theme.colors.mainDarkgreen};

  ${({ theme }) => theme.fonts.b2_18_medium_130};

  border-radius: 0.5rem;

  cursor: pointer;
`;