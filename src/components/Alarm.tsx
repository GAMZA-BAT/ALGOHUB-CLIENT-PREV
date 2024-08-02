import { css } from '@emotion/react';

import { useEffect, useState } from 'react';

import { Notifications, getNotifications } from '@/api/noti';

import alertError from '@/utils/alertError';

import { Theme } from '@/styles/theme';

import MaskIcon from './icon/MaskIcon';

const Alarm = () => {
  const data = useFetchList();
  return (
    <div css={Container}>
      {data.map((item, idx) => (
        <div key={idx} css={ItemWrapper}>
          <div css={HeadWrapper}>
            <div css={ImgWrapper}>
              <MaskIcon width={7} height={7} isCircle src={item.groupImage} />
            </div>
            <div css={ContentWrapper}>
              <div style={{ fontSize: '3rem' }}>{item.groupName}</div>
              <div style={{ fontSize: '2rem' }}>{item.message}</div>
            </div>
          </div>
          <div css={SubContentWrapper}>{item.subContent}</div>
        </div>
      ))}
    </div>
  );
};

const useFetchList = () => {
  const [notiList, setNotiList] = useState<Notifications[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getNotifications();
        setNotiList(res);
      } catch (e) {
        alertError(e, '알람 목록 로드 실패.');
      }
    };
    fetch();
  }, []);
  return notiList;
};

export default Alarm;

const Container = css`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1rem;
  flex-direction: column;
  padding: 10rem 2rem 1rem;
  overflow-y: scroll;
`;

const ItemWrapper = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid ${Theme.color.black};
  border-radius: 8px;
  padding: 2rem;
  gap: 2rem;
`;

const HeadWrapper = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;
const ImgWrapper = css``;

const ContentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubContentWrapper = css`
  font-size: 2rem;
`;
