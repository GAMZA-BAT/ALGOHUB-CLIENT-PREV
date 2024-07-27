import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import GroupDashboard from '@/pages/groupDashboard/GroupDashboard';
import LoginPage from '@/pages/loginPage/LoginPage';
import Onboarding from '@/pages/onboarding/Onboarding';
import SignupPage from '@/pages/signupPage/SignupPage';
import UserDashboard from '@/pages/userDashboard/UserDashboard';

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
        path: 'group-dashboard',
        element: <GroupDashboard />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
