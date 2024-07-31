import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

import { Group } from '@/type/group';

import pin from '@/assets/img/pin.png';

import GroupItem from './GroupItem';

interface GroupGridProps {
  title: string;
  groupList?: Group[];
}

const GroupGrid = ({ title, groupList }: GroupGridProps) => {
  return (
    <div css={Container}>
      <div css={TitleWrapper}>
        <MaskIcon width={28} height={40} src={pin} />
        <div css={Title}>{title}</div>
      </div>
      <div css={GroupContainer}>
        {groupList?.map((group) => {
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
`;

const TitleWrapper = css`
  display: flex;
  width: 100%;
  gap: 18px;
`;

const Title = css`
  font-size: 1.4rem;
  font-family: 'Pretendard-regular';
`;

const GroupContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
