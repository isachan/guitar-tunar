'use client';
import React, { useState } from 'react';
import Pitchfinder from 'pitchfinder';
import { getCents, getNote, getStandardFrequency, noteStrings } from '@/utils/Helpers';
import RangeBar from '@/components/RangeBar';
import { usePathname } from 'next/navigation';

interface TunerProps {
  freq: number;
  note: number;
  noteName: string;
  octave: number;
  cents: number;
}

const Tuner = () => {
  const pathname = usePathname().replace('/', '').toUpperCase();

  const [audioInput, setAudioInput] = useState<TunerProps>({ freq: 0, note: 0, noteName: '', octave: 0, cents: 0 });

  // 1. accessing user's microphone
  navigator.mediaDevices // navigator only in browser envt (not server side)
    .getUserMedia({ audio: true })
    .then(stream => {
      // Handle the microphone stream
      console.log('stream:', stream);

      // 2. audioContext -> set up source node to capture microphone audio
      // connect source node to a ScriptProcessorNode or AnalyserNode to process or analyze the audio data in real-time.
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const microphoneStream = audioContext.createMediaStreamSource(stream);
      const scriptNode = audioContext.createScriptProcessor(4096, 1, 1);

      console.log('audioContext', audioContext);
      console.log('microphoneStream', microphoneStream);
      console.log('scriptNode', scriptNode);

      microphoneStream.connect(scriptNode);
      scriptNode.connect(audioContext.destination);

      scriptNode.onaudioprocess = event => {
        const inputData = event.inputBuffer.getChannelData(0);
        // Process or analyze audio data here
        console.log('what is inputData', inputData);

        const detectPitch = Pitchfinder.AMDF({
          maxFrequency: 800,
          minFrequency: 50,
        });

        const pitch = detectPitch(inputData);
        if (pitch) {
          console.log('pitch', pitch);
          const freq = pitch * 1.09;
          const note = getNote(freq);
          const cents = getCents(freq, note);
          const noteName = noteStrings[note % 12];
          const octave = parseInt(note / 12) - 1;

          console.log('freq', freq, 'note', note, 'cents', cents, 'noteName', noteName, 'octave', octave);
          setAudioInput({ freq, note, noteName, octave, cents });
          // // 3. Pitch Analysis (PitchAnalyzer & Pitchfinder)
          // const analyserNode = audioContext.createAnalyser();
          // microphoneStream.connect(analyserNode);

          // analyserNode.fftSize = 2048; // Adjust as needed
          // const bufferLength = analyserNode.frequencyBinCount;
          // const dataArray = new Float32Array(bufferLength);

          // //CONVERTING
          // // Create a Uint8Array with the same length
          // const uint8Array = new Uint8Array(dataArray.length * 4); // Each float32 takes 4 bytes

          // // Convert each float32 value to uint8 and store in the Uint8Array
          // for (let i = 0; i < dataArray.length; i++) {
          //   const floatValue = dataArray[i];
          //   const uint8Value = Math.round(((floatValue - 0) * (255 - 0)) / (1 - 0)); // Scale to 0-255 range
          //   uint8Array[i * 4] = uint8Value; // Assuming little-endian byte order
          // }

          // analyserNode.getByteTimeDomainData(uint8Array);
        }
      };
    })
    .catch(error => {
      // Handle errors
      console.log('error:', error);
    });

  return (
    <>
      <h1 className='text-xl font-bold p-4'>{pathname}</h1>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center p-4 m-8 w-1/2 h-1/2 border-solid rounded-lg bg-slate-400'>
          <span>{audioInput.noteName}</span>
          <span>{audioInput.octave}</span>
          <p>{audioInput.freq.toFixed(2)} Hz</p>
          <p>{audioInput.note} note</p>
          <p>{audioInput.cents} cent</p>
        </div>
      </div>
      <RangeBar value={0} />
    </>
  );
};

export default Tuner;
