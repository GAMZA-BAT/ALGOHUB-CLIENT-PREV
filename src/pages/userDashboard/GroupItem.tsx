import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import { Group } from '@/type/group';

import ic_crown from '@/assets/img/ic_crown.png';

const GroupItem = ({ group }: { group: Group }) => {
  const navigate = useNavigate();
  const handleGroupClick = () => {
    navigate('/group', { state: { groupId: group.id } });
  };
  return (
    <div css={GroupWrapper} onClick={handleGroupClick}>
      <img css={GroupImage} src={group.groupImage} />
      <div css={TitleWrapper}>{group.name}</div>
      <div css={dateWrapper}>{`${group.startDate} ~ ${group.endDate}`}</div>
      {group.isOwner && <img css={crown} src={ic_crown} />}
    </div>
  );
};

export default GroupItem;

const GroupWrapper = css`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 12px;
  cursor: pointer;
`;

const GroupImage = css`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-size: cover;
`;

const TitleWrapper = css`
  font-size: 1.3rem;
  font-weight: 600;
`;

const dateWrapper = css`
  font-size: 1rem;
  font-weight: 300;
`;

const crown = css`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 30px;
  height: 25px;
`;
