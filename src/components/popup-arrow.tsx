import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

interface PopupArrowProps {
    togglePopup: () => void;
    popup: boolean;
}

const PopupArrow: React.FC<PopupArrowProps> = ({ togglePopup, popup }) => {
    const nodeRef = useRef(null);

    const handleClick = () => {
        togglePopup();
    };

    return (
        <>
            <CSSTransition
                in={popup}
                timeout={1000}
                classNames="rotate"
                nodeRef={nodeRef}
            >
                <img
                    ref={nodeRef}
                    onClick={handleClick}
                    className={`cursor-pointer p-1 w-5 h-5 transform transition-transform duration-1000 ${
                        popup ? 'rotate-180' : 'rotate-0'
                    }`}
                    src="/public/icons/popup_arrow.svg"
                    alt="popup arrow"
                />
            </CSSTransition>

        </>
    );
};

export default PopupArrow;