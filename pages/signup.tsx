import styled from '@emotion/styled';
import { useState } from 'react';
import { IcCheckbox, IcCheckboxUnselected } from '../public/assets/icons';

export default function signup() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [nickName, setNickName] = useState<string>('');
  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <StSignupWrapper>
      <StSignupTitle>회원가입</StSignupTitle>
      <StInputWrapper>
        <StNicknameSpan>닉네임</StNicknameSpan>
        <StNicknameInput
          type="text"
          value={nickName}
          onChange={handleNickName}
        />
        <StNoticeSpan>
          한, 영, 숫자 조합만 가능합니다. 2글자 이상 10글자 이하로 입력해주세요.
        </StNoticeSpan>
        <StCheckBoxWrapper onClick={handleChecked}>
          <IcCheckboxUnselected />

          {isChecked && <StFillToyMark />}
          <StNicknameSpan>
            개인정보 수집 및 이용약관에 동의합니다.
          </StNicknameSpan>
        </StCheckBoxWrapper>
        <StSignupBtn type="button">가입하기</StSignupBtn>
      </StInputWrapper>
    </StSignupWrapper>
  );
}

const StSignupWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 4.6rem;
  padding-bottom: 18.8rem;
`;
const StSignupTitle = styled.h1`
  padding-bottom: 6.7rem;

  ${({ theme }) => theme.fonts.t1_28_medium_150}
`;
const StInputWrapper = styled.article`
  display: flex;
  align-items: left;
  flex-direction: column;
  position: relative;
`;
const StNicknameSpan = styled.span`
  ${({ theme }) => theme.fonts.b2_18_medium_130}
`;
const StNicknameInput = styled.input`
  width: 38.6rem;
  height: 4rem;
  margin-top: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 5px;
`;
const StNoticeSpan = styled.span`
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.gray005};
  ${({ theme }) => theme.fonts.b7_12_regular_120}
`;
const StCheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 9rem;

  text-align: center;
`;
const StFillToyMark = styled(IcCheckbox)`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
`;
const StSignupBtn = styled.button`
  height: 4.1rem;
  margin-top: 9rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.gray003};
  color: ${({ theme }) => theme.colors.white};
`;
