import { css } from '@emotion/react';

import { useSearchParams } from 'react-router-dom';

import {
  DurationStyle,
  MetaContainer,
  TitleStyle,
  Twoline,
} from '@/pages/groupPage/components/ProblemBox';

import LevelIcon from '@/components/@common/LevelIcon';
import CodeHighlighter from '@/components/@common/modal/SolvedDetail/CodeHighlighter';
import CommentBox from '@/components/@common/modal/SolvedDetail/CommentBox';

import { useGetSolutionById } from '@/hooks/query/useSolutionQuery';

import { ProblemDataType } from '@/type/problem';

import testImg from '@/assets/img/ic_algohub_purple.png';
import CloseIcon from '@/assets/svgs/ic_close.svg?react';
import SendIcon from '@/assets/svgs/ic_send_plane.svg?react';

import { useModalDispatch } from '@/contexts/modalContext';

const SolvedDetail = () => {
  const dispatch = useModalDispatch();
  const [searchParams] = useSearchParams();
  const solutionId = searchParams.get('solvedDetail') || 0;
  const problem: ProblemDataType = JSON.parse(localStorage.getItem('problem') + '');

  const {
    data: solutionsData,
    error: solutionsError,
    isLoading: isSolutionsLoading,
  } = useGetSolutionById(+solutionId);

  console.log({ solutionsData });
  if (isSolutionsLoading) return <></>;
  return (
    <div css={Wrapper}>
      <header css={HeaderContainer}>
        <section css={MetaContainer}>
          <LevelIcon level={problem.level} />
          <div css={Twoline}>
            <p css={TitleStyle}>{problem.title}</p>
            <p css={DurationStyle}>{`${problem.startDate} ~ ${problem.endDate}`}</p>
          </div>
          <p css={HeaderInfoStyle}>{solutionsData?.nickname}</p>
          <p css={HeaderInfoStyle}>{solutionsData?.solvedDate}</p>
          <p css={HeaderInfoStyle}>{solutionsData?.memoryUsage}KB</p>
          <p css={HeaderInfoStyle}>{solutionsData?.executionTime}ms</p>
          <p css={HeaderInfoStyle}>{solutionsData?.language}</p>
          <p css={HeaderInfoStyle}>{solutionsData?.codeLength}B</p>
          <p css={HeaderInfoStyle}>{solutionsData?.isCorrect ? 'Correct!' : 'InCorrect!'}</p>
        </section>
        <CloseIcon
          width={30}
          height={30}
          onClick={() =>
            dispatch({
              type: 'CLOSE_MODAL',
            })
          }
        />
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
  padding: 10px;
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
  font-size: 25px;
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
