import styled from '@emotion/styled';
import Link from 'next/link';
import { IcNoriHeaderLogo, IcSearchIcon } from '../../public/assets/icons';
import React, { useState } from 'react';
import Router from 'next/router';
import { FilterTagProps, ViewProductProps } from '../../types/viewProduct';
import {
  checkedItemsState,
  filterCheckQuery,
  filterTagState,
  selectIconState,
  toyKindState,
} from '../../core/atom';
import { useRecoilState } from 'recoil';

export default function Header() {
  const [inputValue, setInputValue] = useState<string>('');
  const [toyKindList, setToyKindList] = useRecoilState<string[]>(toyKindState);
  const [selectedIcon, setSeletedIcon] =
    useRecoilState<number>(selectIconState);
  const [checkedItems, setCheckedItems] =
    useRecoilState<Set<number>[]>(checkedItemsState);
  const [filterTagList, setFilterTagList] =
    useRecoilState<FilterTagProps[]>(filterTagState);
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [filterQuery, setFilterCheckQuery] =
    useRecoilState<ViewProductProps>(filterCheckQuery);

  const handleClick = () => {
    Router.push({
      pathname: '/viewProduct',
      query: {
        filter: true,
        search: inputValue,
        type: '',
        month: '',
        priceCd: '',
        playHowCd: '',
        toySiteCd: '',
      },
    });
    setInputValue('');
    setFilterCheckQuery({
      search: inputValue,
      type: '',
      month: '',
      priceCd: '',
      playHowCd: '',
      toySiteCd: '',
    });
    setCheckedItems([
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
    ]);
    setFilterTagList([]);
    setToyKindList([
      '아기체육관',
      '모빌',
      '바운서',
      '쏘서',
      '점퍼루',
      '위고',
      '보행기',
      '걸음마 보조기',
      '러닝홈',
      '러닝테이블',
      '기타 학습완구',
      '미끄럼틀',
      '에어바운스',
      '트램펄린',
      '어린이 자동차',
      '흔들말',
      '그네',
      '소꿉놀이',
      '역할놀이',
      '기타',
    ]);
    setSeletedIcon(0);
  };
  const handleClickExcept = () => {
    setInputValue('');
    setFilterCheckQuery({
      search: inputValue,
      type: '',
      month: '',
      priceCd: '',
      playHowCd: '',
      toySiteCd: '',
    });
    setCheckedItems([
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
    ]);
    setFilterTagList([]);
    setToyKindList([
      '아기체육관',
      '모빌',
      '바운서',
      '쏘서',
      '점퍼루',
      '위고',
      '보행기',
      '걸음마 보조기',
      '러닝홈',
      '러닝테이블',
      '기타 학습완구',
      '미끄럼틀',
      '에어바운스',
      '트램펄린',
      '어린이 자동차',
      '흔들말',
      '그네',
      '소꿉놀이',
      '역할놀이',
      '기타',
    ]);
    setSeletedIcon(0);
  };
  const handleOnKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <StHeaderWrapper className="mainHeader">
      <StContentSection>
        <StTopLink>
          <p>
            <a>고객센터</a> | <a>마이페이지</a> |
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </p>
        </StTopLink>
        <StMainContents>
          <Link href="/">
            <a>
              <IcNoriHeaderLogo onClick={handleClickExcept} />
            </a>
          </Link>
          <StSearchWrapper>
            <StSearchBar>
              <input
                type="text"
                maxLength={60}
                placeholder="상품명, 스토어명을 검색해보세요!"
                onChange={handleInputValue}
                onKeyPress={handleOnKeyPress}
                value={inputValue}
              />
              <IcSearchIcon onClick={handleClick} />
            </StSearchBar>
            <StMenu>
              <Link href="/viewProduct">
                <StMenuBtn type="button" onClick={handleClickExcept}>
                  상품보기
                </StMenuBtn>
              </Link>
              <Link href="/community">
                <StMenuBtn type="button" onClick={handleClickExcept}>
                  커뮤니티
                </StMenuBtn>
              </Link>
              <StMenuBtn
                onClick={handleClickExcept}
                href="https://happy-elephant-0ba.notion.site/ABOUT-nori-b95acaff0c3145ab8d3319c0a58dfbe0"
              >
                ABOUT
              </StMenuBtn>
            </StMenu>
          </StSearchWrapper>
        </StMainContents>
      </StContentSection>
    </StHeaderWrapper>
  );
}

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;

  position: sticky;
  top: -0.001rem;

  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.white};

  z-index: 2;
`;
const StContentSection = styled.section`
  width: 117.6rem;
`;
const StTopLink = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0rem;
  padding-top: 0.7rem;
  padding-left: 82%;
  a {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    ${({ theme }) => theme.fonts.b7_12_regular_120}

    cursor: pointer;

    &:hover {
      ${({ theme }) => theme.fonts.b7_12_bold_120}
    }
  }
`;
const StMainContents = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 2.9rem;
`;
const StSearchWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 4.8rem;
`;
const StSearchBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 28.5rem;
  height: 4.2rem;

  background: ${({ theme }) => theme.colors.white_opacity_14};
  border-radius: 0.8rem;

  & > svg {
    cursor: pointer;
  }

  input {
    height: 2.2rem;
    width: 22rem;

    color: ${({ theme }) => theme.colors.white_opacity_75};
    ${({ theme }) => theme.fonts.b3_16_medium_140}

    &::placeholder {
      color: ${({ theme }) => theme.colors.white_opacity_75};
    }

    :focus::placeholder {
      opacity: 0;
    }
  }
`;
const StMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 27.3rem;
  height: 2.6rem;
  gap: 3.2rem;

  line-height: 2.6rem;
`;
const StMenuBtn = styled.a`
  ${({ theme }) => theme.fonts.t4_18_regular_150}

  color: ${({ theme }) => theme.colors.white};

  &:hover {
    ${({ theme }) => theme.fonts.t4_18_semibold_150};
  }
  cursor: pointer;
`;
