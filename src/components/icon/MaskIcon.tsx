/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import defaultImg from '@/assets/img/grayLogo.png';

interface MaskIconProps {
  width: number;
  height: number;
  src?: string;
  maskColor?: string;
  isCircle?: boolean;
}

const MaskIcon = ({ width, height, src = defaultImg, maskColor, isCircle }: MaskIconProps) => {
  const style = css`
    width: ${width}rem;
    height: ${height}rem;
    background: ${maskColor || 'none'};
    ${maskColor
      ? `
        mask: url(${src}) center/contain no-repeat;
        -webkit-mask: url(${src}) center/contain no-repeat;
      `
      : `
        background-image: url(${src});
        background-size: contain;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    ${isCircle ? 'border-radius: 70%;' : ''}
  `;

  return <div css={style} />;
};

export default MaskIcon;
