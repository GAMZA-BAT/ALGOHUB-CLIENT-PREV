import { css } from '@emotion/react';

import { ReactNode, useState } from 'react';

import { Theme } from '@/styles/theme';

interface NavbarProps {
  children: ReactNode[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar = ({ children, selectedTab, setSelectedTab }: NavbarProps) => {
  return (
    <div css={Container}>
      <div css={TabContainer}>
        {children.map((child, index) => {
          return (
            <div css={TabWrapper} key={index} onClick={() => setSelectedTab(index)}>
              {child}
            </div>
          );
        })}
      </div>
      <div css={seperator}>
        <div css={highlight} style={{ left: selectedTab * 160 }} />
      </div>
    </div>
  );
};

export default Navbar;

const Container = css`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  height: 64px;
  width: 100%;
`;

const TabContainer = css`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 4px;
  width: 100%;
`;

const TabWrapper = css`
  width: 160px;
  max-height: 50%;
  cursor: pointer;
`;

const seperator = css`
  position: relative;
  width: 100%;
  border: 0.5px solid #000000;
`;

const highlight = css`
  position: absolute;
  width: 160px;
  top: -1px;
  border: 1.5px solid ${Theme.color.mainPink};
`;
