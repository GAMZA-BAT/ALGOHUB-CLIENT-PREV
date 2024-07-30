import CheckBoxIc from '@/assets/svgs/ic_check_box.svg?react';

import { Theme } from '@/styles/theme';

const CheckboxIcon = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <CheckBoxIc
      width={'40px'}
      height={'40px'}
      fill={isChecked ? Theme.color.darkgray : Theme.color.lowLightGray}
    />
  );
};

export default CheckboxIcon;
