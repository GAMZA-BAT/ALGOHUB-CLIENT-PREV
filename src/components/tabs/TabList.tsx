import find from '@/assets/svgs/ic_find.svg';
import homeIcon from '@/assets/svgs/ic_home.svg';
import plusCircle from '@/assets/svgs/ic_plus_circle.svg';

import { useModalDispatch } from '@/contexts/modalContext';

import NavTab from '../@common/navbar/NavTab';

const Dashboard = () => {
  return <NavTab src={homeIcon} title="Dashboard" />;
};

const CreateGroup = () => {
  const dispatch = useModalDispatch();

  return (
    <NavTab
      src={plusCircle}
      title="Create Group"
      onClick={() => {
        dispatch({
          type: 'OPEN_MODAL',
          payload: 'createGroup',
        });
      }}
    />
  );
};

const JoinGroup = () => {
  const dispatch = useModalDispatch();
  return (
    <NavTab
      src={find}
      title="Find Group"
      onClick={() => {
        dispatch({
          type: 'OPEN_MODAL',
          payload: 'findGroup',
        });
      }}
    />
  );
};

export const TabList = {
  Dashboard,
  CreateGroup,
  JoinGroup,
};
