import { css } from '@emotion/react';
import { format } from 'date-fns';

import { useRef, useState } from 'react';

import DurationPicker from '@/components/@common/DurationPicker';
import ModalTemplate from '@/components/@common/modal/ModalTemplate';

import { usePostProblem } from '@/hooks/query/useProblemQuery';

import { Theme } from '@/styles/theme';

import { useModalDispatch } from '@/contexts/modalContext';

const AddProblem = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [link, setLink] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const dispatch = useModalDispatch();
  const startDateString = startDate ? format(startDate, 'yyyy-MM-dd') : '';
  const endDateString = endDate ? format(endDate, 'yyyy-MM-dd') : '';

  const problemMutation = usePostProblem();
  const handleSubmit = () => {
    problemMutation.mutate({
      groupId: +(localStorage.getItem('groupId') || ''),
      link,
      startDate: startDateString,
      endDate: endDateString,
    });

    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  return (
    <ModalTemplate title="Add Problem">
      <div css={BodyContainer}>
        <div css={InputWrapper}>
          <div css={InputText}>Problem Link</div>
          <input ref={inputRef} css={InputBox} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div css={InputWrapper}>
          <div css={InputText}>Duration</div>
          <DurationPicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <button
          css={SaveBtnStyle}
          style={{ width: '60%', height: '50px', margin: 'auto', fontSize: '3rem' }}
          onClick={handleSubmit}
        >
          SAVE
        </button>
      </div>
    </ModalTemplate>
  );
};

export default AddProblem;

const BodyContainer = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 80px;
`;

const InputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputText = css`
  font-size: 2rem;
`;

const InputBox = css`
  width: 100%;
  height: 5rem;
  border: 1px solid #000;
  font-size: 5rem;
  text-align: center;
  letter-spacing: 1rem;
  border-radius: 4px;
  padding: 0 8px;
`;

const SaveBtnStyle = css`
  padding: 10px;
  margin-top: 15px;
  border-radius: 10px;
  background-color: ${Theme.color.mainBlue};
  color: white;
  cursor: pointer;
`;
