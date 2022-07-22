import styled from '@emotion/styled';
import { IcWriteHeaderLogo } from '../../public/assets/icons';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { isChangeInfoState, newPostInfoState } from '../../core/atom';
import { postCommunity, putCommunity } from '../../core/api/community';
import { useRouter } from 'next/router';
import { PutCommunityBody } from '../../types/community';

export default function WriteHeader() {
  const [newPostInfo, setNewPostInfo] = useRecoilState(newPostInfoState);
  const [isChangeCommunity, setIsChangeCommunity] =
    useRecoilState(isChangeInfoState);
  const router = useRouter();
  const { pathname, query } = useRouter();

  const handleRegister = async () => {
    const { title, content, imageList, category } = newPostInfo;
    if (title === '' || content === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('section', category);

    if (imageList)
      imageList.map((image) => {
        formData.append('imageList', image.file);
      });

    const res = await postCommunity(formData);

    const {
      data: { status },
    } = res;

    if (status === 201) {
      setNewPostInfo({
        category: '후기',
        title: '',
        content: '',
      });
      router.push(`/community/${res.data.data.boardId}`);
    }
  };

  const handleCancel = () => {
    const val = confirm(
      '수정을 취소하시겠습니까? 작성하던 내용은 모두 삭제됩니다.',
    );

    if (val) {
      router.push(`/community/${query.cid}`);
    }
  };

  const handleUpdate = async () => {
    const { category, title, content, imageList } = newPostInfo;
    const {
      isChangeCategory,
      isChangeTitle,
      isChangeContent,
      isChangeImageList,
    } = isChangeCommunity;

    const updatePostInfo: PutCommunityBody = {};
    const formData = new FormData();

    if (isChangeCategory) formData.append('category', category);
    if (isChangeTitle) {
      formData.append('title', title);
      updatePostInfo.title = title;
    }
    if (isChangeContent) {
      formData.append('content', content);
      updatePostInfo.content = content;
    }
    if (isChangeImageList) {
      if (imageList)
        imageList.map((image) => {
          formData.append('imageList', image.file);
        });
    }

    console.log('==check==');
    console.log(formData.get('title'));
    console.log(formData.get('content'));
    console.log(formData.get('category'));
    // console.log(imageList);

    if (updatePostInfo.title === '' || updatePostInfo.content === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const res = await putCommunity(String(query.cid), formData);
    const {
      data: { status },
    } = res;

    console.log('== check 수정 ==');
    console.log(res);
    if (status === 200) {
      setNewPostInfo({
        category: '후기',
        title: '',
        content: '',
      });
      setIsChangeCommunity({
        isChangeCategory: false,
        isChangeTitle: false,
        isChangeContent: false,
        isChangeImageList: false,
      });
      router.push(`/community/${res.data.data.boardId}`);
    }
  };

  return (
    <StWriteHeaderWrapper>
      <Link href="/community">
        <a>
          <IcWriteHeaderLogo />
        </a>
      </Link>
      {pathname === '/write/[cid]' ? (
        <StModifyBlock>
          <StCancleBtn isMargin={false} onClick={handleCancel}>
            취소
          </StCancleBtn>
          <StWriteBtn isMargin={false} onClick={handleUpdate}>
            수정완료
          </StWriteBtn>
        </StModifyBlock>
      ) : (
        <StWriteBtn isMargin={true} onClick={handleRegister}>
          등록하기
        </StWriteBtn>
      )}
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
const StWriteBtn = styled.a<{ isMargin: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: ${({ isMargin }) => (isMargin ? '11.4rem' : '0rem')};

  width: 10rem;
  height: 4.2rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.b2_18_medium_130}

  cursor: pointer;
`;
const StCancleBtn = styled(StWriteBtn)`
  margin-left: 0rem;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mainDarkgreen};

  border: 0.1rem solid ${({ theme }) => theme.colors.mainDarkgreen};
`;
const StModifyBlock = styled.div`
  display: flex;
  gap: 1.4rem;
`;
