import styled from '@emotion/styled';
import Router from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { postNickname, putSignup } from '../core/api/user';
import { userInfoState } from '../core/atom';
import {
  IcSignupCheckboxSelected,
  IcSignupCheckboxUnselected,
  IcSignupLogo,
} from '../public/assets/icons';
import { checkNickname } from '../utils/check';

export default function signup() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [nickName, setNickName] = useState<string>('');
  const [notice, setNotice] = useState<string>(
    '한, 영, 숫자 조합만 가능합니다. 2글자 이상 10글자 이하로 입력해주세요.',
  );
  const [isNickname, setIsNickname] = useState<boolean>(true);
  const signupBtnRef = useRef<HTMLButtonElement>(null);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    if (signupBtnRef.current)
      if (isNickname && isChecked) {
        signupBtnRef.current.style.backgroundColor = '#1DB981';
        signupBtnRef.current.disabled = false;
      } else {
        signupBtnRef.current.style.backgroundColor = '#E2E2E2';
        signupBtnRef.current.disabled = true;
      }
  }, [isNickname, isChecked]);

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  const handleInputBlur = async () => {
    console.log(nickName);
    if (nickName === '') setIsNickname(true);
    else if (!checkNickname(nickName)) {
      setIsNickname(false);
      setNotice(
        '한, 영, 숫자 조합만 가능합니다. 2글자 이상 10글자 이하로 입력해주세요.',
      );
    } else {
      const data = await postNickname({ nickname: nickName });
      if (data.status === 409) setNotice('사용중인 닉네임입니다');
      else if (data.status === 201) {
        setNotice('사용가능한 닉네임입니다');
        setIsNickname(true);
      }
    }
  };
  const handleSignupBtn = () => {
    if (isNickname && isChecked) {
      putSignup({ nickname: nickName });
      Router.push('/');
    }
  };

  return (
    <StSignupWrapper>
      <IcSignupLogo />
      <h1>회원가입</h1>
      <StInputWrapper>
        <span className="nickName">닉네임</span>
        <input
          type="text"
          value={nickName}
          onChange={handleNickName}
          placeholder="사용할 닉네임을 입력해주세요."
          maxLength={10}
          onBlur={handleInputBlur}
        />
        <span className="length">{nickName.length}&nbsp;/&nbsp;10</span>
        <StNoticeSpan isNickname={isNickname} notice={notice}>
          {notice}
        </StNoticeSpan>
        <StCheckBoxWrapper onClick={handleChecked}>
          <IcSignupCheckboxUnselected />
          {isChecked && <StFillToyMark />}
          <span className="underline">개인정보 수집 및 이용약관에 </span>
          <span>&nbsp;동의합니다.</span>
        </StCheckBoxWrapper>
        <StSignupBtn type="button" ref={signupBtnRef} onClick={handleSignupBtn}>
          가입하기
        </StSignupBtn>
      </StInputWrapper>
    </StSignupWrapper>
  );
}

const StSignupWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;
  margin-top: 12.8rem;

  & > h1 {
    margin-top: 2.5rem;

    ${({ theme }) => theme.fonts.t1_28_medium_150};
  }
`;
const StInputWrapper = styled.article`
  display: flex;
  align-items: left;
  flex-direction: column;
  position: relative;

  margin-top: 7.9rem;

  & > input {
    width: 38.6rem;
    height: 4rem;
    margin-top: 0.8rem;
    padding: 0.9rem 0rem 0.9rem 1.8rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.b4_15_regular_146};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray005};
      ${({ theme }) => theme.fonts.b4_15_regular_146}
    }
  }
  span.nickName {
    ${({ theme }) => theme.fonts.t6_17_regular_170}
  }
  span.length {
    position: absolute;
    top: 4.8rem;
    left: 34rem;

    color: ${({ theme }) => theme.colors.gray005};
    ${({ theme }) => theme.fonts.b5_14_regular_140};
  }
`;
const StNoticeSpan = styled.span<{ isNickname: boolean; notice: string }>`
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;

  color: ${({ isNickname, notice, theme: { colors } }) =>
    !isNickname &&
    notice !== '사용중인 닉네임입니다' &&
    notice !== '사용가능한 닉네임입니다' &&
    notice ===
      '한, 영, 숫자 조합만 가능합니다. 2글자 이상 10글자 이하로 입력해주세요.'
      ? 'red'
      : notice === '사용중인 닉네임입니다'
      ? colors.orange
      : notice === '사용가능한 닉네임입니다'
      ? colors.mainGreen
      : colors.gray007};
  ${({ theme }) => theme.fonts.b7_12_regular_120};
`;
const StCheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13rem;

  text-align: center;

  span {
    maring-top: 0.9rem;

    color: ${({ theme }) => theme.colors.gray009};
    ${({ theme }) => theme.fonts.b4_15_regular_146};
  }
  span.underline {
    text-decoration: underline;
  }
`;
const StFillToyMark = styled(IcSignupCheckboxSelected)`
  position: absolute;
  top: 0rem;
  left: 0rem;
`;
const StSignupBtn = styled.button`
  height: 4.2rem;
  margin-top: 11.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.colors.gray004};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.b2_18_medium_130};
`;
