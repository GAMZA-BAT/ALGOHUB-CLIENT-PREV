type ModalType = 'findGroup'

interface ModalContextType {
    isOpen: boolean;
    openModal: (type : ModalType) => void;
    closeModal: () => void;
}

type ModalAction =  
{
    type: 'OPEN_MODAL';
    payload: ModalType;
}
| {
    type: 'CLOSE_MODAL';
}


const modalReducer = (state: ModalContextType, action: ModalAction): ModalContextType => {
    switch(action.type){
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
}