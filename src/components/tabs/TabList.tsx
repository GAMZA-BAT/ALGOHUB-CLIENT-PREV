import find from '@/assets/svgs/ic_find.svg';
import homeIcon from '@/assets/svgs/ic_home.svg';
import plusCircle from '@/assets/svgs/ic_plus_circle.svg';
import settingIc from '@/assets/svgs/ic_setting.svg';

import { dispatchModalOpen } from '@/contexts/modalContext';

import NavTab from '../@common/navbar/NavTab';

const Dashboard = () => {
  return <NavTab src={homeIcon} title="Dashboard" />;
};

const CreateGroup = () => {
  return <NavTab src={plusCircle} title="Create-Group" />;
};

const ProblemList = () => {
  return <NavTab src={find} title="Problem-List" />;
};

const GroupSettings = () => {
  return <NavTab src={settingIc} title="Settings" />;
};

const Settings = () => {
  return (
    <NavTab
      src={plusCircle}
      title="Create Group"
      onClick={() => {
        dispatchModalOpen('createGroup', '');
      }}
    />
  );
};

const JoinGroup = () => {
  return (
    <NavTab
      src={find}
      title="Find Group"
      onClick={() => {
        dispatchModalOpen('findGroup', '');
      }}
    />
  );
};

export const TabList = {
  Dashboard,
  CreateGroup,
  JoinGroup,
  ProblemList,
  Settings,
  GroupSettings,
};
