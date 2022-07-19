import styled from '@emotion/styled';
import { IcWriteHeaderLogo } from '../../public/assets/icons';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { newPostInfoState } from '../../core/atom';
import { postCommunity } from '../../core/api/community';
import { useRouter } from 'next/router';

export default function WriteHeader() {
  const [newPostInfo, setNewPostInfo] = useRecoilState(newPostInfoState);
  const router = useRouter();

  const handleRegister = async () => {
    const { title, content } = newPostInfo;
    if (title === '' || content === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const data = await postCommunity(newPostInfo);
    setNewPostInfo({
      category: '후기',
      title: '',
      content: '',
    });
    router.push(`/community/${data.id}`);
  };

  return (
    <StWriteHeaderWrapper>
      <Link href="/community">
        <a>
          <IcWriteHeaderLogo />
        </a>
      </Link>
      <StWriteBtn onClick={handleRegister}>등록하기</StWriteBtn>
    </StWriteHeaderWrapper>
  );
}

const StWriteHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  position: sticky;
  top: -3.2em;

  width: 100%;
  height: 11.4rem;
  padding-top: 4.2rem;

  background-color: ${({ theme }) => theme.colors.white};

  z-index: 1;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const StWriteBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 4.2rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.b2_18_medium_130}

  cursor: pointer;
`;
