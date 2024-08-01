import { css } from '@emotion/react';

import { ChangeEvent, useState } from 'react';
import DatePicker from 'react-datepicker';

import MembersTable from '@/pages/groupPage/components/MembersTable';

import ImgUpload from '@/components/@common/ImgUpload';

import { useGroupInfo, useGroupMemberList } from '@/hooks/query/useGroupQuery';

import defaultImg from '@/assets/img/grayLogo.png';

const GroupSetting = () => {
  const groupId = +(localStorage.getItem('groupId') || 0);
  const {
    data: memberData,
    error: memberError,
    isLoading: isMemberLoading,
  } = useGroupMemberList(groupId);

  const { data: groupData, error: groupError, isLoading: isGroupLoading } = useGroupInfo(groupId);

  const [imageFile, setImageFile] = useState<string>(groupData?.groupImage || defaultImg);
  const [groupName, setGroupName] = useState(groupData?.name + '');
  const [startDate, setStartDate] = useState<Date | null>(new Date(groupData?.startDate + ''));
  const [endDate, setEndDate] = useState<Date | null>(new Date(groupData?.endDate + ''));
  const [description, setDescription] = useState(groupData?.introduction + '');

  console.log({ memberData });

  return (
    <div css={Wrapper}>
      <section css={GroupInfoContainer}>
        <ImgUpload imageFile={imageFile} setImageFile={setImageFile} />
        <h2 css={Meta}>Group name</h2>
        <input
          css={textArea}
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
        />
        <h2 css={Meta}>Duration</h2>
        <div css={DateWrapper}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            css={textArea}
          />
          <div>~</div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            css={textArea}
          />
        </div>
        <h2 css={Meta}>Description</h2>
        <textarea
          css={longTextArea}
          value={description}
          placeholder="그룹을 간단하게 소개해주세요."
          onChange={(event) => setDescription(event.target.value)}
        />
      </section>
      <section css={MembersContainer}>
        <h2
          css={css`
            margin-bottom: 1rem;
          `}
        >
          Members
        </h2>
        <MembersTable />
      </section>
    </div>
  );
};

export default GroupSetting;

const Wrapper = css`
  display: flex;
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

const GroupInfoContainer = css`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: white;
`;

const Meta = css`
  margin-top: 2rem;
  margin-bottom: 10px;
`;

const DateWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const textArea = css`
  width: 100%;
  padding: 10px;
  font-size: 25px;
  border-radius: 12px;
  letter-spacing: 2px;
  background-color: #fcfcfc;
`;

const longTextArea = css`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 25px;
  border-radius: 12px;
  letter-spacing: 2px;
  background-color: #fcfcfc;
`;

const MembersContainer = css`
  width: 70%;
  padding: 0 1rem;
`;
