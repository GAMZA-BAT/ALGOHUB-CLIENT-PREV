import { css } from '@emotion/react';

import { useRef, useState } from 'react';

import MaskIcon from '@/components/icon/MaskIcon';

import { getGroupMetaByCode, joinGroup } from '@/api/getGroupList';

import alertError from '@/utils/alertError';

import { GroupMeta } from '@/type/group';

import ic_question from '@/assets/svgs/ic_question.svg';

import { useModalDispatch } from '@/contexts/modalContext';

import Button from '../Button/Button';
import ModalTemplate from './ModalTemplate';

const FindGroup = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useModalDispatch();
  const [groupMeta, setGroupMeta] = useState<GroupMeta | null>(null);

  const onChange = async () => {
    const code = inputRef.current?.value;
    if (!code || code.length !== 21) return;
    const meta = await getGroupMetaByCode(code);
    setGroupMeta(meta);
  };

  const onClickJoin = async () => {
    const code = inputRef.current?.value;
    if (!code || code.length !== 21) {
      alert('초대 코드를 입력해주세요.');
      return;
    }
    try {
      await joinGroup(code);
    } catch (e) {
      alertError(e, '그룹 가입에 실패했습니다.');
    }
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  return (
    <ModalTemplate title="Find Group">
      <div css={BodyContainer}>
        <div css={InputWrapper}>
          <div css={InputText}>Invite Code</div>
          <input ref={inputRef} css={InputBox} onChange={onChange} />
        </div>
        <div css={GroupWrapper}>
          <div css={ProfileWrapper}>
            <MaskIcon
              width={200}
              height={200}
              isCircle
              src={groupMeta ? groupMeta.groupImage : ic_question}
            />
          </div>
          <div css={TextWrapper}>
            {!groupMeta ? (
              <div css={dummyText}>초대 코드를 입력하세요.</div>
            ) : (
              <>
                <div>{groupMeta.name}</div>
                <div css={DescWrapper}>
                  <div>{`${groupMeta.startDate} ~ ${groupMeta.endDate}`}</div>
                  <div>{groupMeta.introduction}</div>
                </div>
              </>
            )}
          </div>
        </div>
        <Button
          style={{ width: '60%', height: '50px', margin: 'auto', fontSize: '1rem' }}
          onClick={onClickJoin}
        >
          Join
        </Button>
      </div>
    </ModalTemplate>
  );
};

export default FindGroup;

const BodyContainer = css`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 80px;
`;

const InputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputText = css`
  font-size: 1.7rem;
`;

const InputBox = css`
  width: 100%;
  height: 70px;
  border: 1px solid #000;
  font-size: 50px;
  text-align: center;
  letter-spacing: 12px;
  border-radius: 4px;
  padding: 0 8px;
`;

const GroupWrapper = css`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 12px;
`;

const TextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 2rem;
  margin: auto;
`;

const DescWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  font-size: 1rem;
`;

const dummyText = css`
  font-size: 2rem;
  margin: auto;
`;

const ProfileWrapper = css`
  border-radius: 50%;
  border: 2.5px solid #000;
  overflow: hidden;
`;
