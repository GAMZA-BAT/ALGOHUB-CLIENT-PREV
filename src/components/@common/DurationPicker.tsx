import { css } from '@emotion/react';

import React from 'react';
import DatePicker from 'react-datepicker';

import CalendarIc from '@/assets/svgs/ic_calendar.svg?react';

interface durationPickerPropType {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DurationPicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: durationPickerPropType) => {
  return (
    <div css={DateWrapper}>
      <section css={DateContainer}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          css={TextArea}
        />
        <CalendarIc css={CalendarIcon} />
      </section>
      <div>~</div>
      <section css={DateContainer}>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          css={TextArea}
        />
        <CalendarIc css={CalendarIcon} />
      </section>
    </div>
  );
};

export default DurationPicker;

const DateWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextArea = css`
  width: 100%;
  padding: 10px;
  font-size: 23px;
  border-radius: 12px;
  letter-spacing: 2px;
  background-color: #fcfcfc;
  padding-right: 50px; /* 아이콘 공간 확보 */
`;

const DateContainer = css`
  position: relative;
  width: 100%;
`;

const CalendarIcon = css`
  position: absolute;
  right: 10px; /* DateContainer 내부에서 조정 */
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  pointer-events: none; /* 아이콘이 클릭 이벤트를 막지 않도록 설정 */
`;
