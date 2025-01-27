import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import CreateGroup from '@/components/@common/modal/CreateGroup';
import FindGroup from '@/components/@common/modal/FindGroup';
import AddProblem from '@/components/@common/modal/ProblemModify/AddProblem';
import ModifyProblem from '@/components/@common/modal/ProblemModify/ModifyProblem';
import SolvedDetail from '@/components/@common/modal/SolvedDetail/SolvedDetail';

export type ModalType =
  | 'findGroup'
  | 'createGroup'
  | 'solvedDetail'
  | 'addProblem'
  | 'modifyProblem'
  | 'none';
const ModalTypeList: ModalType[] = [
  'findGroup',
  'createGroup',
  'solvedDetail',
  'addProblem',
  'modifyProblem',
];
interface ModalContextType {
  isOpen: boolean;
  children: ReactNode;
  style?: React.CSSProperties;
}

const initialState: ModalContextType = {
  isOpen: false,
  children: null,
};

type ModalAction =
  | {
      type: 'OPEN_MODAL';
      payload: {
        variant: ModalType;
        modalId: string;
        style?: React.CSSProperties;
      };
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
        children: getModal(action.payload.variant),
        style: action.payload.style,
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

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const search = location.search.replace('?', '').split('=') as [ModalType, string];
    const type = search?.[0];
    const modalId = search?.[1];
    console.log({ type });
    console.log(type in ModalTypeList);
    // url로 접근할 때
    if (!state.isOpen && type in ModalTypeList) {
      dispatch({
        type: 'OPEN_MODAL',
        payload: {
          variant: type,
          modalId,
        },
      });
    }
  }, [state, searchParams, setSearchParams]);

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
    case 'addProblem':
      return <AddProblem />;
    case 'modifyProblem':
      return <ModifyProblem />;
    case 'none':
      return null;
  }
};
