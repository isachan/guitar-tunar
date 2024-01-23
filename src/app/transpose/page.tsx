'use client';

import Modal from '@/components/Modal';
import React, { useState } from 'react';
import { chordFamilyChart } from '@/utils/Helpers';
const Transpose = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>('');

  return (
    <div>
      <div className='p-4'>
        <h2>What note is your song in?</h2>
        {chordFamilyChart.map(el => (
          <button key={el.key} className={`w-8 h-8 m-2 rounded-full ${currentKey === el.key ? `bg-slate-500` : 'bg-slate-200'} hover:bg-slate-400`} onClick={() => setCurrentKey(el.key)}>
            {el.key}
          </button>
        ))}
        <h2>Click each section to enter your chord progression!</h2>
      </div>
      <div className='flex flex-col items-start p-4 m-4 h-[140px] border-solid rounded-lg bg-slate-200 hover:bg-slate-300 cursor-pointer' onClick={() => setIsModalOpen(true)}>
        <h2>Verse</h2>
      </div>
      <div className='flex flex-col items-start p-4 m-4 h-[140px] border-solid rounded-lg bg-slate-200 hover:bg-slate-300 cursor-pointer' onClick={() => setIsModalOpen(true)}>
        <h2>Chorus</h2>
      </div>
      <div className='flex flex-col items-start p-4 m-4 h-[140px] border-solid rounded-lg bg-slate-200 hover:bg-slate-300 cursor-pointer' onClick={() => setIsModalOpen(true)}>
        <h2>Bridge</h2>
      </div>
      <div className='flex flex-col items-start p-4 m-4 h-[140px] border-solid rounded-lg bg-slate-200 hover:bg-slate-300 cursor-pointer' onClick={() => setIsModalOpen(true)}>
        <h2>Free Worship</h2>
      </div>
      <Modal isOpen={isModalOpen} handleSecondaryClick={() => setIsModalOpen(!isModalOpen)} handlePrimaryClick={() => setIsModalOpen(!isModalOpen)}>
        <h4>Please select your chord progressions (in order):</h4>
        <div className='flex flex-row p-4 my-8 h-20 rounded bg-slate-100'></div>
        {chordFamilyChart
          .find(el => el.key === currentKey)
          ?.value.map(el => (
            <button key={el} className={`w-14 h-8 m-2 rounded-full bg-slate-200`} onClick={() => {}}>
              {el}
            </button>
          ))}
      </Modal>
    </div>
  );
};

export default Transpose;
