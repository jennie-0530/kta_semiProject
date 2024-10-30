import React from "react";

interface ModalProps {
    isOpen: boolean;
    toggleModal: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggleModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
