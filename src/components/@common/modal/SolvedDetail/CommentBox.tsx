import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

interface commentBoxPropType {
  imgSrc: string;
  nickName: string;
  comment: string;
}

const CommentBox = ({ imgSrc, nickName, comment }: commentBoxPropType) => {
  return (
    <div css={Wrapper}>
      <section css={Header}>
        <MaskIcon width={5.5} height={5.5} src={imgSrc} isCircle={true} />
        <p css={NameStyle}>{nickName}</p>
      </section>
      <p css={CommentStyle}>{comment}</p>
    </div>
  );
};

export default CommentBox;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const Header = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NameStyle = css`
  font-size: 30px;
  font-weight: 600;
`;

const CommentStyle = css`
  font-family: 'Pretendard-regular';
  font-weight: 200;
  font-size: 25px;
  margin-left: 5px;
`;
