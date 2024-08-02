import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import { GroupType } from '@/type/group';

import ic_crown from '@/assets/img/ic_crown.png';

const GroupItem = ({ group }: { group: GroupType }) => {
  const navigate = useNavigate();
  const handleGroupClick = () => {
    localStorage.setItem('groupId', group.id + '');
    navigate('/group');
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
  gap: 1rem;

  height: 30rem;
  padding: 1rem;

  border: 1px solid #000000;
  border-radius: 12px;
  cursor: pointer;
`;

const GroupImage = css`
  width: 100%;
  height: 80%;
  border-radius: 12px;
`;

const TitleWrapper = css`
  font-size: 1.6rem;
  font-weight: 600;
`;

const dateWrapper = css`
  font-size: 1.3rem;
  font-weight: 300;
`;

const crown = css`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 30px;
  height: 25px;
`;
