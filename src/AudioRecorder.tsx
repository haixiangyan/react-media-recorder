import React from 'react';
import useMediaRecorder from "./useMediaRecorder";

const AudioRecorder = () => {
  const {
    mediaUrl,
    startRecord,
    resumeRecord,
    pauseRecord,
    stopRecord,
    clearBlobUrl,
  } = useMediaRecorder({ audio: true });

  return (
    <div>
      <h2>录音</h2>
      <audio src={mediaUrl} controls />

      <button onClick={startRecord}>开始</button>
      <button onClick={pauseRecord}>暂停</button>
      <button onClick={resumeRecord}>恢复</button>
      <button onClick={stopRecord}>停止</button>
      <button onClick={clearBlobUrl}>清除 URL</button>
    </div>
  )
}

export default AudioRecorder;
