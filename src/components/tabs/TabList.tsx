import { useSearchParams } from 'react-router-dom';

import find from '@/assets/svgs/ic_find.svg';
import homeIcon from '@/assets/svgs/ic_home.svg';
import plusCircle from '@/assets/svgs/ic_plus_circle.svg';
import settingIc from '@/assets/svgs/ic_setting.svg';

import { useModalDispatch } from '@/contexts/modalContext';

import NavTab from '../@common/navbar/NavTab';

const Dashboard = () => {
  return <NavTab src={homeIcon} title="Dashboard" />;
};

const CreateGroup = () => {
  const dispatch = useModalDispatch();
  const [, setSearchParams] = useSearchParams();

  return (
    <NavTab
      src={plusCircle}
      title="Create-Group"
      onClick={() => {
        dispatch({
          type: 'OPEN_MODAL',
          payload: {
            variant: 'createGroup',
            modalId: '',
          },
        });
        setSearchParams({ createGroup: '' });
      }}
    />
  );
};

const ProblemList = () => {
  return <NavTab src={find} title="Problem-List" />;
};

const GroupSettings = () => {
  return <NavTab src={settingIc} title="Settings" />;
};

const JoinGroup = () => {
  const dispatch = useModalDispatch();
  const [, setSearchParams] = useSearchParams();

  return (
    <NavTab
      src={find}
      title="Find Group"
      onClick={() => {
        dispatch({
          type: 'OPEN_MODAL',
          payload: {
            variant: 'findGroup',
            modalId: '',
          },
        });
        setSearchParams({ findGroup: '' });
      }}
    />
  );
};

export const TabList = {
  Dashboard,
  CreateGroup,
  JoinGroup,
  ProblemList,
  GroupSettings,
};
