import find from '@/assets/svgs/ic_find.svg';
import homeIcon from '@/assets/svgs/ic_home.svg';
import plusCircle from '@/assets/svgs/ic_plus_circle.svg';

import NavTab from '../@common/navbar/NavTab';

const Dashboard = () => {
  return <NavTab src={homeIcon} title="Dashboard" />;
};

const CreateGroup = () => {
  return <NavTab src={plusCircle} title="Create-Group" />;
};

const JoinGroup = () => {
  return <NavTab src={find} title="Find-Group" />;
};

const ProblemList = () => {
  return <NavTab src={} title="Problem-List" />;
};

const Settings = () => {
  return <NavTab src={} title="Settings" />;
};

export const TabList = {
  Dashboard,
  CreateGroup,
  JoinGroup,
  ProblemList,
  Settings
};
