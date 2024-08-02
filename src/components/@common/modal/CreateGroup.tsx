import { css } from '@emotion/react';
import { format } from 'date-fns';

import { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import MaskIcon from '@/components/icon/MaskIcon';

import useImageUploader from '@/hooks/image/useImageUploader';

import { createGroup } from '@/api/getGroupList';

import alertError from '@/utils/alertError';

import ic_pencil from '@/assets/svgs/ic_pencil.svg';
import profileIcon from '@/assets/svgs/ic_profile_circle.svg';

import { useModalDispatch } from '@/contexts/modalContext';

import Button from '../Button/Button';
import DurationPicker from '../DurationPicker';
import ModalTemplate from './ModalTemplate';

const CreateGroup = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const groupNameRef = useRef<HTMLInputElement>(null);
  const groupDescriptionRef = useRef<HTMLInputElement>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const { imageUrl, handleImageUpload } = useImageUploader();
  const dispatch = useModalDispatch();

  const onClickCreate = async () => {
    const groupName = groupNameRef.current?.value;
    const groupDescription = groupDescriptionRef.current?.value;
    const startDateString = startDate ? format(startDate, 'yyyy-MM-dd') : '';
    const endDateString = endDate ? format(endDate, 'yyyy-MM-dd') : '';

    if (!groupName || !startDateString || !endDateString) {
      alert('필수 칸을 입력해주세요');
      return;
    }

    try {
      await createGroup({
        name: groupName,
        startDate: startDateString,
        endDate: endDateString,
        introduction: groupDescription,
        profileImage: imageUrl ?? profileIcon,
      });
      dispatch({
        type: 'CLOSE_MODAL',
      });
    } catch (e) {
      alertError(e, '그룹 생성에 실패했습니다.');
    }
  };

  const onClickImage = () => {
    imageRef.current?.click();
  };

  return (
    <ModalTemplate title="Create Group">
      <div css={Container}>
        <div css={GroupContainer}>
          <div css={GroupImageWrapper}>
            <div>Group Image</div>
            <div css={GroupImage} onClick={onClickImage}>
              <MaskIcon width={25} height={25} isCircle src={imageUrl ?? ic_pencil} />
              <input
                type="file"
                accept="image/*"
                ref={imageRef}
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <div css={inputContainer}>
            <div css={inputWrapper}>
              <div style={{ fontSize: '1.4rem' }}>Group name</div>
              <input ref={groupNameRef} css={textArea} type="text"></input>
            </div>

            <div css={inputWrapper}>
              <div style={{ fontSize: '1.4rem' }}>Duration</div>
              <div css={DateWrapper}>
                <DurationPicker
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              </div>
            </div>

            <div css={inputWrapper}>
              <div style={{ fontSize: '1.4rem' }}>Description(optional)</div>
              <input ref={groupDescriptionRef} css={textArea} type="text"></input>
            </div>
          </div>
        </div>
        <Button css={buttonCss} onClick={onClickCreate}>
          Create
        </Button>
      </div>
    </ModalTemplate>
  );
};

export default CreateGroup;

const Container = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const GroupContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  height: 100%;
  width: 100%;
`;

const GroupImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-size: 1.7rem;
`;

const GroupImage = css`
  border-radius: 50%;
  border: 2px solid #000;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;

const inputContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DateWrapper = css`
  display: flex;
  gap: 10px;
`;

const textArea = css`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 2.5rem;
  border-radius: 1.2rem;
  letter-spacing: 2px;
  background-color: #fcfcfc;
`;

const buttonCss = css`
  width: 60%;
  height: 50px;
  font-size: 3rem;
`;
