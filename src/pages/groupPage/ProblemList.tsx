import { css } from '@emotion/react';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';

import { seperator } from '@/components/@common/SideContent';
import CheckboxIcon from '@/components/icon/CheckboxIcon';
import MaskIcon from '@/components/icon/MaskIcon';

import { useGetGroupInfo } from '@/hooks/query/useGroupQuery';
import { useProblem } from '@/hooks/query/useProblemQuery';

import { ProblemDataType } from '@/type/problem';

import pencilIcon from '@/assets/svgs/ic_pencil.svg';
import plusIcon from '@/assets/svgs/ic_plus_circle.svg';

import { Theme } from '@/styles/theme';

import { useModalDispatch } from '@/contexts/modalContext';

const ProblemList = () => {
  const [isUnsolvedOnly, setIsUnsolvedOnly] = useState(false);
  const groupId = +(localStorage.getItem('groupId') || '0');
  const dispatch = useModalDispatch();
  const [, setSearchParams] = useSearchParams();

  const {
    data: groupData,
    error: groupError,
    isLoading: isGroupLoading,
  } = useGetGroupInfo(groupId);
  const isOwner = !!groupData?.isOwner;

  const {
    data: problemData,
    error: problemError,
    isLoading: isProblemLoading,
  } = useProblem(groupId);

  const handleUnsolvedOnlyClick = () => {
    setIsUnsolvedOnly((prev) => !prev);
  };

  const handleAddProblem = () => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: {
        variant: 'addProblem',
        modalId: groupId + '',
        style: { width: '10%', height: '85%' },
      },
    });
    setSearchParams({ solvedDetail: groupId + '' });
  };

  if (isProblemLoading || isGroupLoading) return <></>;
  return (
    <div css={Wrapper}>
      <section
        css={css`
          display: flex;
          justify-content: space-between;
          padding-right: 20px;
        `}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 css={Meta}>In Progress</h1>
          <div style={{ cursor: 'pointer', paddingBottom: '10px' }} onClick={handleAddProblem}>
            {isOwner && <MaskIcon width={3} height={3} src={plusIcon} isCircle />}
          </div>
        </div>

        <div
          css={css`
            display: flex;
            gap: 10px;
            align-items: center;
          `}
          onClick={handleUnsolvedOnlyClick}
        >
          <p css={GrayFont}>unsolved-only</p>
          <CheckboxIcon isChecked={isUnsolvedOnly} />
        </div>
      </section>
      <hr css={seperator} />
      {problemData['inProgressProblems']
        .filter((problem: ProblemDataType) => (isUnsolvedOnly ? !problem.solved : true))
        .map((problem: ProblemDataType) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isOwner && <MaskIcon width={3} height={3} src={pencilIcon} isCircle />}
            <ProblemBox key={problem.problemId} problem={problem} />
          </div>
        ))}
      <h1
        css={[
          Meta,
          css`
            margin-top: 5rem;
          `,
        ]}
      >
        Expired
      </h1>
      <hr css={seperator} />
      {problemData['expiredProblems'].map((problem: ProblemDataType) => (
        <ProblemBox key={problem.problemId} problem={problem} isExpired={!problem.solved} />
      ))}
    </div>
  );
};

export default ProblemList;

const Wrapper = css`
  margin: 20px -20px 0 0;
`;

const Meta = css`
  font-size: 2rem;
  padding-bottom: 15px;
`;

const GrayFont = css`
  font-size: 1.5rem;
  color: ${Theme.color.mediumGray};
`;
