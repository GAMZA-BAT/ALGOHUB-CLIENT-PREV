import { css } from '@emotion/react';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';

import { seperator } from '@/components/@common/SideContent';

const ProblemList = () => {
  return (
    <div css={Wrapper}>
      <h1 css={Meta}>In Progress</h1>
      <hr css={seperator} />
      {/* ProblemList */}
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
      <ProblemBox
        level={1}
        title={''}
        duration={''}
        submitCnt={0}
        memberCnt={0}
        accuracy={0}
        isChecked={false}
        isExpired
      />
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
