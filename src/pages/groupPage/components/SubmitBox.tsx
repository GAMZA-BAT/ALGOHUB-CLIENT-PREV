import { css } from '@emotion/react';

import { useSearchParams } from 'react-router-dom';

import MaskIcon from '@/components/icon/MaskIcon';

import { SolutionDataType } from '@/type/solution';

import MessageIc from '@/assets/svgs/ic_message.svg?react';

import { useModalDispatch } from '@/contexts/modalContext';

import { adjustBrightness } from '../../../utils/adjustBrightness';
import { levelColor } from '../../../utils/level';

interface submitBoxPropType {
  variant?: 'first' | 'secondary' | 'third' | 'default';
  solution: SolutionDataType;
  level: number;
}
const SubmitBox = ({ variant = 'default', solution, level }: submitBoxPropType) => {
  const dispatch = useModalDispatch();
  const [, setSearchParams] = useSearchParams();

  const alpha = (): number => {
    switch (variant) {
      case 'first':
        return 1;
      case 'secondary':
        return 0.6;
      case 'third':
        return 0.2;
      case 'default':
        return 0;
    }
  };

  const handleModalOpen = () => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: {
        variant: 'solvedDetail',
        modalId: solution.solutionId + '',
        style: { width: '95%', height: '85%' },
      },
    });
    setSearchParams({ solvedDetail: solution.solutionId + '' });
  };

  return (
    <div css={Wrapper} onClick={handleModalOpen}>
      <MaskIcon width={5} height={5} src={solution.profileImage} isCircle={true} />
      <section
        css={[
          Container,
          css`
            background-color: ${adjustBrightness(levelColor[level], alpha())};
          `,
        ]}
      >
        <h2>{solution.nickname}</h2>
        <p>{solution.solvedDateTime}</p>
        <p>{solution.memoryUsage}KB</p>
        <p>{solution.executionTime}ms</p>
        <p>{solution.language}</p>
        <p>{solution.codeLength}B</p>
        <p>{solution.isCorrect ? 'Correct!' : 'InCorrect!'}</p>
      </section>
      <div css={CommentWrapper}>
        <MessageIc width={30} height={30} />
        <p>{solution.commentCount}</p>
      </div>
    </div>
  );
};

export default SubmitBox;

const Wrapper = css`
  display: flex;
  padding: 20px 40px 0 20px;
  gap: 20px;
`;

const Container = css`
  display: grid;
  grid-template-columns: 0.8fr 1.8fr 1.3fr 1fr 1fr 1fr 1fr;

  justify-content: center;
  justify-items: center;
  align-items: center;

  width: 100%;
  padding: 0 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const CommentWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
