import { css } from '@emotion/react';

import { ChangeEvent, useState } from 'react';

import CameraIc from '@/assets/svgs/ic_camera.svg?react';

p;
interface imgUploadPropType {
  imageFile: string;
  setImageFile: React.Dispatch<React.SetStateAction<string>>;
}
const ImgUpload = ({ imageFile, setImageFile }: imgUploadPropType) => {
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(URL.createObjectURL(file));
    };
  };

  return (
    <div css={ImageInputWrapper}>
      <label css={ImageInputLabel}>
        <div css={ImgCircle}>
          <img
            src={imageFile}
            alt="프로필 이미지"
            css={css`
              width: 100%;
              height: 100%;
            `}
          />
          <input type="file" accept="image/*" onChange={(e) => handleChangeImage(e)} />
        </div>
        <CameraIc width={'40px'} height={'40px'} />
      </label>
    </div>
  );
};

export default ImgUpload;

const ImageInputWrapper = css`
  display: flex;
  justify-content: center;
`;

const ImageInputLabel = css`
  position: relative;

  & > svg {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const ImgCircle = css`
  overflow: hidden;

  width: 13rem;
  height: 13rem;
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > input {
    display: none;
  }
`;
