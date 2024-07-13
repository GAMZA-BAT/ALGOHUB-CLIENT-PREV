import { css } from '@emotion/react';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/@common/Button/Button';

import getUserInfo from '@/api/user/getUserInfo';
import signIn from '@/api/user/signIn';

import alertError from '@/utils/alertError';

import Logo from '@/assets/img/ic_algohub_purple.png';

import { AuthManager } from '@/datamanager/authManager';

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignIn = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert('모든 칸을 입력해주세요');
      return;
    }

    try {
      const response = await signIn({ email, password });
      AuthManager.getInstance().setToken(response.token);
    } catch (e) {
      alertError(e, '로그인에 실패했습니다.');
    }
  };

  return (
    <div css={container}>
      <img css={logoIcon} src={Logo} />
      <div css={description}>Sign in to AlgoHub</div>
      <div css={inputContainer}>
        <div css={inputWrapper}>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Email Address</div>
            <input css={textArea} type="text" ref={emailRef}></input>
          </div>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Password</div>
            <input css={textArea} type="password" ref={passwordRef}></input>
          </div>
        </div>
        <Button style={{ height: '50px', fontSize: '25px' }} onClick={handleSignIn}>
          Sign in
        </Button>
      </div>
      <div css={footer}>
        <div style={{ fontSize: '23px' }}>New to AlgoHub?</div>
        <div
          style={{ fontSize: '23px', color: '#282183', cursor: 'pointer' }}
          onClick={() => {
            navigate('/signup');
          }}
        >
          Create an account
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

const container = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const logoIcon = css`
  width: 172px;
  height: 120px;
`;

const description = css`
  font-family: 'Pretendard-Bold';
  font-size: 43px;
`;

const inputContainer = css`
  background-color: #efefef;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 10px;
  box-shadow: 8.5px 8.5px 8px rgba(0, 0, 0, 0.5);
`;

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const inputCss = css`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const textArea = css`
  border: none;
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 25px;
  letter-spacing: 2px;
`;

const footer = css`
  display: flex;
  gap: 10px;
`;
