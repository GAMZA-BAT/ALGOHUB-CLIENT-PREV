import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import GroupPage from '@/pages/groupPage/GroupPage';
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
        path: 'group',
        element: <GroupPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
