import { css } from '@emotion/react';

import { useEffect, useRef, useState } from 'react';
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

import { useGetComment, usePostComment } from '@/hooks/query/useCommentQuery';
import { useGetSolutionById } from '@/hooks/query/useSolutionQuery';

import { ProblemDataType } from '@/type/problem';

import CloseIcon from '@/assets/svgs/ic_close.svg?react';
import SendIcon from '@/assets/svgs/ic_send_plane.svg?react';

import { useModalDispatch } from '@/contexts/modalContext';

const SolvedDetail = () => {
  const dispatch = useModalDispatch();
  const [searchParams] = useSearchParams();
  const solutionId = searchParams.get('solvedDetail') || '0';
  const problem: ProblemDataType = JSON.parse(localStorage.getItem('problem') + '');
  const [comment, setComment] = useState('');

  const {
    data: solutionData,
    error: solutionError,
    isLoading: isSolutionLoading,
  } = useGetSolutionById(+solutionId);

  const {
    data: commentData,
    error: commentError,
    isLoading: isCommentLoading,
  } = useGetComment(+solutionId);

  const commentMutation = usePostComment();

  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      const height = containerRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      containerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }, [commentData]);

  const handleCommentSend = () => {
    commentMutation.mutate({
      solutionId: +solutionId,
      content: comment,
    });

    setComment('');
  };
  if (isSolutionLoading || isCommentLoading) return <></>;
  return (
    <div css={Wrapper}>
      <header css={HeaderContainer}>
        <section css={MetaContainer}>
          <LevelIcon level={problem.level} />
          <div css={Twoline}>
            <p css={TitleStyle}>{problem.title}</p>
            <p css={DurationStyle}>{`${problem.startDate} ~ ${problem.endDate}`}</p>
          </div>
          <p css={HeaderInfoStyle}>{solutionData?.nickname}</p>
          <p css={HeaderInfoStyle}>{solutionData?.solvedDateTime}</p>
          <p css={HeaderInfoStyle}>{solutionData?.memoryUsage}KB</p>
          <p css={HeaderInfoStyle}>{solutionData?.executionTime}ms</p>
          <p css={HeaderInfoStyle}>{solutionData?.language}</p>
          <p css={HeaderInfoStyle}>{solutionData?.codeLength}B</p>
          <p css={HeaderInfoStyle}>{solutionData?.isCorrect ? 'Correct!' : 'InCorrect!'}</p>
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
        <CodeHighlighter code={solutionData?.content + ''} language={solutionData?.language + ''} />
        <section css={CommentWrapper}>
          <section css={CommentContainer} ref={containerRef}>
            {commentData?.map((comment) => (
              <CommentBox
                key={comment.commentId}
                imgSrc={comment.writerProfileImage}
                nickName={comment.writerNickname}
                comment={comment.content}
              />
            ))}
          </section>
          <section css={InputContainer}>
            <textarea
              css={InputStyle}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 작성해주세요."
            />
            <SendIcon width={40} height={40} onClick={handleCommentSend} />
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
  flex-direction: column;
  justify-content: flex-end;
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
