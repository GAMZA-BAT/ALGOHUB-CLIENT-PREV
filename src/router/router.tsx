import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoginPage from '@/pages/loginPage/LoginPage';
import Onboarding from '@/pages/onboarding/Onboarding';
import SignupPage from '@/pages/signupPage/SignupPage';
import UserDashboard from '@/pages/userDashboard/UserDashboard';

import CreateGroup from '@/components/@common/modal/CreateGroup';
import CustomModal from '@/components/@common/modal/CustomModal';

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
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <CustomModal />
    </>
  );
};
