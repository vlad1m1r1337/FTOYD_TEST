import { CSSTransition } from 'react-transition-group';
import { useState, useRef } from 'react';

const PopupArrow = () => {
    const [popup, setPopup] = useState(false);
    const nodeRef = useRef(null);

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
                    onClick={() => setPopup(!popup)}
                    className="cursor-pointer p-1"
                    src="/public/icons/popup_arrow.svg"
                    alt="popup arrow"
                />
            </CSSTransition>
        </>
    );
};

export default PopupArrow;