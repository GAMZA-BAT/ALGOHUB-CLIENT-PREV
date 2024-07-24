import { css } from '@emotion/react';

import GroupGrid from './GroupGrid';

const GroupList = () => {
  return (
    <div css={Container}>
      <div css={MainTitle}>My Groups</div>
      <GroupGrid title={'In progress'} />
      <GroupGrid title={'Queued'} />
      <GroupGrid title={'Done'} />
    </div>
  );
};

export default GroupList;

const Container = css`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 22px;
  padding: 48px;
  border: 1.3px solid #000000;
  border-radius: 24px;
`;

const MainTitle = css`
  font-size: 1.5rem;
  font-weight: 700;
`;
