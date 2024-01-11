'use client';
import React from 'react';

const Tuner = () => {
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
      };
    })
    .catch(error => {
      // Handle errors
      console.log('error:', error);
    });
  return <div>Tuner</div>;
};

export default Tuner;
