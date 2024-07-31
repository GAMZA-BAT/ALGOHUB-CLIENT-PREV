import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';

import CreateGroup from '@/components/@common/modal/CreateGroup';
import FindGroup from '@/components/@common/modal/FindGroup';
import SolvedDetail from '@/components/@common/modal/SolvedDetail/SolvedDetail';

export type ModalType = 'findGroup' | 'createGroup' | 'solvedDetail' | 'none';

interface ModalContextType {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const initialState: ModalContextType = {
  isOpen: false,
  children: null,
  onClose: () => {},
};

type ModalAction =
  | {
      type: 'OPEN_MODAL';
      payload: ModalType;
    }
  | {
      type: 'CLOSE_MODAL';
    };

const modalContext = createContext<ModalContextType>(initialState);
const modalDispatchContext = createContext<Dispatch<ModalAction>>(() => {});

export const useModalContext = () => {
  const context = useContext(modalContext);
  if (!context) {
    throw new Error('Cannot find ModalProvider');
  }
  return context;
};

export const useModalDispatch = () => {
  const context = useContext(modalDispatchContext);
  if (!context) {
    throw new Error('Cannot find ModalProvider');
  }
  return context;
};

const modalReducer = (state: ModalContextType, action: ModalAction): ModalContextType => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        children: getModal(action.payload),
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  return (
    <modalContext.Provider value={state}>
      <modalDispatchContext.Provider value={dispatch}>{children}</modalDispatchContext.Provider>
    </modalContext.Provider>
  );
};

const getModal = (type: ModalType) => {
  switch (type) {
    case 'findGroup':
      return <FindGroup />;
    case 'createGroup':
      return <CreateGroup />;
    case 'solvedDetail':
      return <SolvedDetail />;
    case 'none':
      return null;
  }
};

export const closeModal = () => {
  const dispatch = useModalDispatch();
  dispatch({
    type: 'CLOSE_MODAL',
  });
};
