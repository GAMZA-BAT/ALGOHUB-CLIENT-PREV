import { css } from '@emotion/react';

import { useEffect, useState } from 'react';

import { getGroupList } from '@/api/getGroupList';

import alertError from '@/utils/alertError';

import { Group } from '@/type/group';

import GroupGrid from './GroupGrid';

const GroupList = () => {
  const groupList = useFetchList();
  console.log(groupList);

  return (
    <div css={Container}>
      <div css={MainTitle}>My Groups</div>
      <GroupGrid title={'In progress'} groupList={groupList} />
      <GroupGrid title={'Queued'} />
      <GroupGrid title={'Done'} />
    </div>
  );
};

const useFetchList = () => {
  const [groupList, setGroupList] = useState<Group[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const groupList = await getGroupList();
        setGroupList(groupList);
      } catch (e) {
        alertError(e, '그룹 목록을 불러오는데 실패했습니다.');
      }
    };
    fetch();
  }, []);
  return groupList;
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
