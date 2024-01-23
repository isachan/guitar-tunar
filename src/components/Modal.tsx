'use client';
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  handlePrimaryClick: () => void;
  handleSecondaryClick: () => void;
  children?: any;
}

const Modal = ({ isOpen, handlePrimaryClick, handleSecondaryClick, children }: ModalProps) => {
  return (
    isOpen && (
      <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50' onClick={handleSecondaryClick}>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='bg-white rounded p-4 m-8 min-w-80 min-h-20 max-h-80 shadow-md break-words overflow-scroll'>
            {children}
            <div className='space-x-2'>
              <button className=' bg-blue-600 rounded bottom-0 left-0 p-2 mt-6 text-white font-semibold hover:bg-blue-500' onClick={handlePrimaryClick}>
                Confirm
              </button>
              <button className=' border border-blue-600 border-solid  bg-white rounded bottom-0 left-0 p-2 mt-6 text-black font-semibold hover:bg-blue-500' onClick={handleSecondaryClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
