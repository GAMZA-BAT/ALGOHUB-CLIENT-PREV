import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import GroupDashboard from '@/pages/groupPage/GroupDashboard';
import GroupPage from '@/pages/groupPage/GroupPage';
import GroupSetting from '@/pages/groupPage/GroupSetting';
import ProblemDetail from '@/pages/groupPage/ProblemDetail';
import ProblemList from '@/pages/groupPage/ProblemList';
import LoginPage from '@/pages/loginPage/LoginPage';
import Onboarding from '@/pages/onboarding/Onboarding';
import SignupPage from '@/pages/signupPage/SignupPage';
import UserDashboard from '@/pages/userDashboard/UserDashboard';

import SidePannel from '@/components/@common/SidePannel';
import SolvedDetail from '@/components/@common/modal/SolvedDetail/SolvedDetail';

import App from '@/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Onboarding />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'user-dashboard',
        element: <UserDashboard />,
      },
      {
        path: 'group',
        element: <GroupPage />,
        children: [
          {
            index: true,
            element: <GroupDashboard />,
          },
          {
            path: 'problem-list',
            element: <ProblemList />,
          },
          {
            path: 'problem-detail',
            element: <ProblemDetail />,
          },
          {
            path: 'setting',
            element: <GroupSetting />,
          },
        ],
      },
      {
        path: 'solvedDetail',
        element: <SolvedDetail />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <SidePannel />
    </>
  );
};
