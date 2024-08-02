import { css } from '@emotion/react';

import { ReactNode } from 'react';

import MaskIcon from '../icon/MaskIcon';

interface SideContentProps {
  imageSrc: string;
  title: string;
  detail: string;
  description?: string;
  children?: ReactNode;
}

const SideContent = (props: SideContentProps) => {
  return (
    <div css={Container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MaskIcon width={30} height={30} src={props.imageSrc} isCircle={true} />
      </div>
      <div css={TitleContainer}>
        <div css={TitleWrapper}>
          <div css={Title}>{props.title}</div>
          <div css={PencilWrapper}></div>
        </div>
        <div css={Detail}>{props.detail}</div>
      </div>
      <div css={DescriptionWrapper}>
        {props.description && <div css={Detail}> {props.description}</div>}
        <hr css={seperator} />
      </div>
      {props.children}
    </div>
  );
};

export default SideContent;

const Container = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const TitleContainer = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 1.6rem;
  padding-left: 1.2rem;
`;

const TitleWrapper = css`
  display: flex;
  width: 100%;
`;

const PencilWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  :hover {
    background-color: #e0e0e0;
  }
`;

export const Title = css`
  font-size: 3rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const Detail = css`
  font-size: 2rem;
  font-family: 'Pretendard-regular';
  font-weight: 200;
`;

const DescriptionWrapper = css`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 4px;
  padding-left: 1.2rem;
`;

export const seperator = css`
  width: 100%;
  border: 1px solid #c2c2c2;
`;
