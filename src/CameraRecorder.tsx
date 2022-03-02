import React, {useRef} from 'react';
import useMediaRecorder from "./useMediaRecorder";

const CameraRecorder = () => {
  const {
    mediaUrl,
    startRecord,
    resumeRecord,
    pauseRecord,
    stopRecord,
    clearBlobUrl,
    getMediaStream,
  } = useMediaRecorder({ audio: true, video: true });

  const previewVideo = useRef<HTMLVideoElement>(null)

  return (
    <div>
      <h2>录像</h2>
      <video src={mediaUrl} controls />

      <video ref={previewVideo} controls />

      <button onClick={() => previewVideo.current!.srcObject = getMediaStream() || null}>
        预览
      </button>
      <button onClick={startRecord}>开始</button>
      <button onClick={pauseRecord}>暂停</button>
      <button onClick={resumeRecord}>恢复</button>
      <button onClick={stopRecord}>停止</button>
      <button onClick={clearBlobUrl}>清除 URL</button>
    </div>
  )
}

export default CameraRecorder;
