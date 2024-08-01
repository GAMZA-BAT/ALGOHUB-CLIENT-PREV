import { css } from '@emotion/react';

import { useSideContext, useSideDispatch } from '@/contexts/sidePanelContext';

const SidePannel = () => {
  const dispatch = useSideDispatch();
  const context = useSideContext();
  const isOpen = context.isOpen;

  return (
    <>
      <div css={getPannelCss(isOpen)}>{context.children}</div>
      {isOpen && <div css={dim} onClick={() => dispatch({ type: 'CLOSE' })} />}
    </>
  );
};

export default SidePannel;

const getPannelCss = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  z-index: 2;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${isOpen ? 0 : 100}%);
  transition: transform 0.3s;
`;

const dim = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
