import { css } from '@emotion/react';

import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import SideContent from '@/components/@common/SideContent';
import Navbar from '@/components/@common/navbar/Navbar';
import MaskIcon from '@/components/icon/MaskIcon';
import { TabList } from '@/components/tabs/TabList';

import { useGetGroupInfo, useGroupMemberList } from '@/hooks/query/useGroupQuery';

import { MemberDataType } from '@/type/group';

import defaultImg from '@/assets/img/grayLogo.png';
import crownIc from '@/assets/img/ic_crown.png';

const GroupPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isSetting = location.pathname === '/group/setting';
  const groupId = +(localStorage.getItem('groupId') || '0');

  const {
    data: memberData,
    error: memberError,
    isLoading: isMemberLoading,
  } = useGroupMemberList(groupId);

  const {
    data: groupData,
    error: groupError,
    isLoading: isGroupLoading,
  } = useGetGroupInfo(groupId);

  const handleSelect = (index: number) => {
    setSelectedTab(index);
    switch (index) {
      case 0:
        navigate('/group');
        break;
      case 1:
        navigate('./problem-list');
        break;
      case 2:
        navigate('./setting');
        break;
    }
  };

  if (isMemberLoading || isGroupLoading) return <></>;

  return (
    <>
      <Navbar selectedTab={selectedTab} setSelectedTab={handleSelect}>
        <TabList.Dashboard />
        <TabList.ProblemList />
        <TabList.GroupSettings />
      </Navbar>
      <div css={Wrapper}>
        {isSetting ? (
          <Outlet />
        ) : (
          <>
            <section css={GroupInfoContainer}>
              <SideContent
                imageSrc={groupData?.groupImage + ''}
                title={groupData?.name + ''}
                detail={`${groupData?.startDate} - ${groupData?.endDate}`}
                description={groupData?.introduction}
              />
              <div css={MemberListWrapper}>
                <h1>Members</h1>
                <section css={MemberListContainer}>
                  {memberData?.map((member: MemberDataType) => (
                    <div key={member.memberId} css={MemberContainer}>
                      <MaskIcon
                        width={80}
                        height={80}
                        src={member.profileImage || defaultImg}
                        isCircle={true}
                      />
                      {member.isOwner && <img src={crownIc} css={CrownIcon} />}
                      <h3 css={MemberName}>{member.nickname}</h3>
                    </div>
                  ))}
                </section>
              </div>
            </section>
            <article css={Container}>
              <Outlet />
            </article>
          </>
        )}
      </div>
    </>
  );
};

export default GroupPage;

const Wrapper = css`
  display: flex;
  width: 100%;
`;

const GroupInfoContainer = css`
  width: 25%;
`;

const Container = css`
  width: 75%;
  padding: 0 1%;
`;

const MemberListWrapper = css`
  width: 100%;
  padding: 0 0 0 20px;
`;

const MemberListContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 100%;
  padding-top: 10px;
`;

const MemberContainer = css`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CrownIcon = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
`;

const MemberName = css`
  font-size: 1.5rem;
  font-family: 'Pretendard-regular';
  font-weight: 200;
`;
