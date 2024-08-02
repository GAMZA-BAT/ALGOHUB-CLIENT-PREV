import { css } from '@emotion/react';

import { ReactNode } from 'react';

import MaskIcon from '@/components/icon/MaskIcon';

import ic_close from '@/assets/img/ic_close.png';

import { useModalDispatch } from '@/contexts/modalContext';

const ModalTemplate = ({ children, title }: { children: ReactNode; title: string }) => {
  const dispatch = useModalDispatch();

  return (
    <div css={Container}>
      <div css={HeaderContainer}>
        <div css={titleStyle}>{title}</div>
        <div style={{ cursor: 'pointer' }} onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
          <MaskIcon width={6.4} height={6.4} src={ic_close} />
        </div>
      </div>
      <div css={seperator}></div>
      {children}
    </div>
  );
};

export default ModalTemplate;

const Container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
  padding: 2rem;
`;

const HeaderContainer = css`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const titleStyle = css`
  font-size: 3rem;
`;

const seperator = css`
  width: 100%;
  height: 1px;
  border: 1px solid #000;
`;
