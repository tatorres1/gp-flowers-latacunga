import React from "react";

const ModalEliminar = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className='fixed inset-0 bg-black-500 backdrop-blur-sm flex justify-center items-center' onClick={handleClose} id="wrapper">
            <div className='w-[600px] flex flex-col'>
                <button className="text-white text-xl font-bold place-self-end bg-gray-500 px-4 py-2 rounded"
                    onClick={() => onClose()}>X</button>
                <div className=' text-white bg-gray-600 py-4 rounded-l-lg rounded-br-lg'>{children}
                    
                </div>
            </div>
        </div>
    )
}

export default ModalEliminar;