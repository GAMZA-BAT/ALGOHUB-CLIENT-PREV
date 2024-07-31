import { css } from '@emotion/react';

import {
  DurationStyle,
  MetaContainer,
  TitleStyle,
  Twoline,
} from '@/pages/groupPage/components/ProblemBox';

import LevelIcon from '@/components/@common/LevelIcon';
import { seperator } from '@/components/@common/SideContent';

import CloseIcon from '@/assets/svgs/ic_close.svg?react';

import { useModalDispatch } from '@/contexts/modalContext';

const SolvedDetail = () => {
  const dispatch = useModalDispatch();

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
        <CloseIcon
          width={30}
          height={30}
          onClick={() => {
            dispatch({
              type: 'CLOSE_MODAL',
            });
          }}
        />
      </header>
      <body css={Container}>
        <section css={CodeWrapper}></section>
        <section css={CommentWrapper}></section>
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

const CodeWrapper = css`
  width: 50%;
  height: 100%;

  background-color: red;
`;

const CommentWrapper = css`
  width: 50%;
  height: 100%;
  background-color: blue;
`;
