import React from "react";

const ModalFlor = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
            onClick={handleClose} id="wrappneter">
            <div className='flex flex-col w-5/6'>
                <button className="text-black text-xl self-end bg-white px-4 py-2 rounded"
                    onClick={() => onClose()}>X</button>
                <div className='dark:bg-gray-700 p-2 rounded mt-5'>{children}</div>
            </div>
        </div>
    )
}

export default ModalFlor;