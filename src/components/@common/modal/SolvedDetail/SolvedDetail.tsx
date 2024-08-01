import { css } from '@emotion/react';

import {
  DurationStyle,
  MetaContainer,
  TitleStyle,
  Twoline,
} from '@/pages/groupPage/components/ProblemBox';

import LevelIcon from '@/components/@common/LevelIcon';
import CodeHighlighter from '@/components/@common/modal/SolvedDetail/CodeHighlighter';
import CommentBox from '@/components/@common/modal/SolvedDetail/CommentBox';

import { useGetSolution } from '@/hooks/query/useSolutionQuery';

import testImg from '@/assets/img/ic_algohub_purple.png';
import CloseIcon from '@/assets/svgs/ic_close.svg?react';
import SendIcon from '@/assets/svgs/ic_send_plane.svg?react';

import { dispatchModalClose } from '@/contexts/modalContext';

const SolvedDetail = () => {
  // const {
  //   data: solutionsData,
  //   error: solutionsError,
  //   isLoading: isSolutionsLoading,
  // } = useGetSolution(problem.problemId);

  return (
    <div css={Wrapper}>
      <header css={HeaderContainer}>
        <section css={MetaContainer}>
          <LevelIcon level={13} />
          <div css={Twoline}>
            <p css={TitleStyle}>{'ACM Craft'}</p>
            <p css={DurationStyle}>{'2024-08-30 ~ 2024-09-21'}</p>
          </div>
          <p css={HeaderInfoStyle}>j-nary</p>
          <p css={HeaderInfoStyle}>2024.07.01 23:59:59</p>
          <p css={HeaderInfoStyle}>2020KB</p>
          <p css={HeaderInfoStyle}>0ms</p>
          <p css={HeaderInfoStyle}>C++17</p>
          <p css={HeaderInfoStyle}>467B</p>
          <p css={HeaderInfoStyle}>Correct!</p>
        </section>
        <CloseIcon width={30} height={30} onClick={dispatchModalClose} />
      </header>
      <body css={Container}>
        <CodeHighlighter code={'const hello'} />
        <section css={CommentWrapper}>
          <section css={CommentContainer}>
            <CommentBox
              imgSrc={testImg}
              nickName={'rladmstn'}
              comment={
                '이 부분은 dfs 부분이군요! 잘 구현하셨네요 그런데 메모리 복잡도를 조금 더 신경 써보는 건 어떻게 생각하세요?'
              }
            />
          </section>
          <section css={InputContainer}>
            <textarea css={InputStyle} />
            <SendIcon width={40} height={40} />
          </section>
        </section>
      </body>
    </div>
  );
};

export default SolvedDetail;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
`;

const HeaderContainer = css`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const HeaderInfoStyle = css`
  font-family: 'Pretendard-regular';
  font-weight: 200;
  font-size: 30px;
  margin-left: 20px;
`;

const Container = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const CommentWrapper = css`
  width: 50%;
  height: 100%;
`;

const CommentContainer = css`
  display: flex;
  flex-direction: column-reverse;
  height: 90%;
  overflow-y: scroll;
`;

const InputContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  padding: 20px;
`;

const InputStyle = css`
  width: 90%;
  padding: 10px;
  font-size: 25px;
  border-radius: 12px;
  letter-spacing: 2px;
`;
