import React from "react";

const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null; 

    const handleClose = (e) => {
        if(e.target.id === 'wrapper' ) onClose();
    }
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose} id="wrapper">
        <div className='w-1/2 flex flex-col sm:w-[600px]'>
            <button className="text-black text-xl place-self-end bg-white px-4 py-2 rounded" onClick={() => onClose()}>X</button>
            <div className='bg-white p-2 rounded' style={{ overflowY: 'auto', maxHeight: '80vh' }}>
            {children}
            </div>
        </div>
        </div>

    )
}

export default Modal;