import React, {useRef, useState} from 'react';
import useMediaRecorder from "./useMediaRecorder";

const App = () => {
  const { mediaUrl, startRecord, resumeRecord, pauseRecord, stopRecord } = useMediaRecorder();

  return (
    <div>
      <h1>react 录音</h1>

      <audio src={mediaUrl} controls />

      <button onClick={startRecord}>开始</button>
      <button onClick={pauseRecord}>暂停</button>
      <button onClick={resumeRecord}>恢复</button>
      <button onClick={stopRecord}>停止</button>
    </div>
  );
}

export default App;
