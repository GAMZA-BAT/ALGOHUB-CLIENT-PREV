import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import Button from '@/components/@common/Button/Button';

import bottomImg from '@/assets/img/onboardingBottom.png';

import { Theme } from '@/styles/theme';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div css={wrapper}>
      <div css={mainText}>알고리즘 스터디 그룹,</div>
      <div css={mainText}>일정 관리하고, 리뷰도 남기세요</div>
      <div css={loginContainer}>
        <div onClick={() => navigate('/login')}>
          <Button>Login</Button>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
          Join us →
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

const wrapper = css`
  width: 100%;
  height: 90%;
  padding-top: 2rem;
  background-image: url(${bottomImg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const mainText = css`
  display: flex;
  justify-content: center;

  width: 100%;
  font-size: 2rem;
  font-weight: 600;
`;

const loginContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 15%;
  color: ${Theme.color.mainBlue};
`;
