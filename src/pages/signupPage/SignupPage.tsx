import { css } from '@emotion/react';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/@common/Button/Button';
import MaskIcon from '@/components/icon/MaskIcon';

import useImageUploader from '@/hooks/image/useImageUploader';

import signUp from '@/api/user/signUp';

import alertError from '@/utils/alertError';

import profileIcon from '@/assets/svgs/ic_profile_circle.svg';

const SignupPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const bjNicknameRef = useRef<HTMLInputElement>(null);

  const { imageUrl, handleImageUpload } = useImageUploader();

  const navigate = useNavigate();

  const handleSignUp = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const nickname = nicknameRef.current?.value;
    const bjNickname = bjNicknameRef.current?.value;

    if (!email || !password || !confirmPassword || !nickname || !bjNickname) {
      alert('모든 칸을 입력해주세요');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    try {
      await signUp({
        email,
        password,
        nickname,
        bjNickname,
        profileImage: imageUrl ?? profileIcon,
      });
      navigate('/login');
    } catch (e) {
      alertError(e, '회원 가입에 실패했습니다.');
    }
  };

  return (
    <div css={container}>
      <div css={description}>Sign up to AlgoHub</div>
      <div css={inputContainer}>
        <div css={inputWrapper}>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Profile Image (optional)</div>
            <div css={ProfileWrapper}>
              <MaskIcon width={6.5} height={6.5} isCircle={true} src={imageUrl ?? profileIcon} />
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
          </div>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Email Address</div>
            <input ref={emailRef} css={textArea} type="text"></input>
          </div>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Password</div>
            <input ref={passwordRef} css={textArea} type="password"></input>
          </div>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Confirm Password</div>
            <input ref={confirmPasswordRef} css={textArea} type="password"></input>
          </div>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>Nickname</div>
            <input ref={nicknameRef} css={textArea} type="text"></input>
          </div>
          <div css={inputCss}>
            <div style={{ fontSize: '25px' }}>BOJ Nickname (required)</div>
            <input ref={bjNicknameRef} css={textArea} type="text"></input>
          </div>
        </div>
        <Button style={{ height: '50px', fontSize: '25px' }} onClick={handleSignUp}>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;

const container = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 50px;
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

const ProfileWrapper = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;
