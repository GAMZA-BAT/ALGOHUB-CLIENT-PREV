import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

import MessageIc from '@/assets/svgs/ic_message.svg?react';

import { useModalDispatch } from '@/contexts/modalContext';

import { adjustBrightness } from '../../../utils/adjustBrightness';
import { levelColor } from '../../../utils/level';

interface submitBoxPropType {
  variant?: 'first' | 'secondary' | 'third' | 'default';
  level: number;
  nickname: string;
  problemImage: string;
  solvedDate: string;
  isCorrect: boolean;
  memoryUsage: number;
  executionTime: number;
  language: string;
  codeLength: number;
}
const SubmitBox = ({
  variant = 'default',
  level,
  problemImage,
  nickname,
  solvedDate,
  memoryUsage,
  executionTime,
  language,
  codeLength,
  isCorrect,
}: submitBoxPropType) => {
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

  const dispatch = useModalDispatch();
  const handleModalOpen = () => {
    console.log('click solved detail');
    dispatch({
      type: 'OPEN_MODAL',
      payload: 'solvedDetail',
    });
  };
  return (
    <div css={Wrapper} onClick={handleModalOpen}>
      <MaskIcon width={50} height={50} src={problemImage} isCircle={true} />
      <section
        css={[
          Container,
          css`
            background-color: ${adjustBrightness(levelColor[level], alpha())};
          `,
        ]}
      >
        <h2>{nickname}</h2>
        <p>{solvedDate}</p>
        <p>{memoryUsage}KB</p>
        <p>{executionTime}ms</p>
        <p>{language}</p>
        <p>{codeLength}B</p>
        <p>{isCorrect ? 'Correct!' : 'InCorrect!'}</p>
      </section>
      <div css={CommentWrapper}>
        <MessageIc width={30} height={30} />
        <p>123</p>
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
  grid-template-columns: 0.8fr 1.5fr 1.3fr 1fr 1fr 1fr 1fr;

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
