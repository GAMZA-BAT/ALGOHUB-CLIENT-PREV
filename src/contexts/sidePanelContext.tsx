import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';

import CreateGroup from '@/components/@common/modal/CreateGroup';
import FindGroup from '@/components/@common/modal/FindGroup';
import SolvedDetail from '@/components/@common/modal/SolvedDetail/SolvedDetail';

interface SideState {
  isOpen: boolean;
  children?: ReactNode;
}

const initialState: SideState = {
  isOpen: false,
  children: null,
};

type Action =
  | {
      type: 'OPEN';
      payload: ReactNode;
    }
  | {
      type: 'CLOSE';
    };

const sideContext = createContext<SideState>(initialState);
const sideDispatchContext = createContext<Dispatch<Action>>(() => {});

export const useSideContext = () => {
  const context = useContext(sideContext);
  if (!context) {
    throw new Error('Cannot find SideProvider');
  }
  return context;
};

export const useSideDispatch = () => {
  const context = useContext(sideDispatchContext);
  if (!context) {
    throw new Error('Cannot find SideProvider');
  }
  return context;
};

const sideReducer = (state: SideState, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        isOpen: true,
        children: action.payload,
      };
    case 'CLOSE':
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export const SideProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(sideReducer, initialState);
  return (
    <sideContext.Provider value={state}>
      <sideDispatchContext.Provider value={dispatch}>{children}</sideDispatchContext.Provider>
    </sideContext.Provider>
  );
};
