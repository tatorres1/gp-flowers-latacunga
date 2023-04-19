import React from "react";

const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null; 

    const handleClose = (e) => {
        if(e.target.id === 'wrapper' ) onClose();
    }
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
            onClick={handleClose} id="wrapper">
            <div className='w-[600px] flex flex-col'>
                <button className="text-black text-xl place-self-end bg-white px-4 py-2 rounded"
                        onClick={() => onClose()}>X</button>
                <div className='bg-white p-2 rounded'>{children}</div>
            </div>
        </div>
    )
}

export default Modal;