import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/homePage/HomePage';
import LoginPage from '@/pages/loginPage/LoginPage';
import Onboarding from '@/pages/onboarding/Onboarding';
import SignupPage from '@/pages/signupPage/SignupPage';

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
      // {
      //   path: 'review/:reservationId',
      //   element: <ReviewPage />,
      // },
      // {
      //   path: 'done/:reservationId',
      //   element: <DonePage />,
      // },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
