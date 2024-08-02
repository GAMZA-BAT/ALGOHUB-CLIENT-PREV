import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

import { GroupType } from '@/type/group';

import pin from '@/assets/img/pin.png';

import GroupItem from './GroupItem';

interface GroupGridProps {
  title: string;
  groupList?: GroupType[];
}

const GroupGrid = ({ title, groupList }: GroupGridProps) => {
  return (
    <div css={Container}>
      <div css={TitleWrapper}>
        <MaskIcon width={2.8} height={4} src={pin} />
        <div css={Title}>{title}</div>
      </div>
      <div css={GroupContainer}>
        {groupList &&
          groupList.length > 0 &&
          groupList.map((group) => {
            return <GroupItem key={group.id} group={group} />;
          })}
      </div>
    </div>
  );
};

export default GroupGrid;

const Container = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-bottom: 3rem;
`;

const TitleWrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 18px;
`;

const Title = css`
  font-size: 2rem;
  font-family: 'Pretendard-regular';
  font-weight: 600;
`;

const GroupContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;
