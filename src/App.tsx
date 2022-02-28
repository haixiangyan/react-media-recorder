import React, {useRef, useState} from 'react';

const App = () => {
  const [audioUrl, setAudioUrl] = useState<string>('');

  const mediaStream = useRef<MediaStream>();
  const mediaRecorder = useRef<MediaRecorder>();
  const mediaBlobs = useRef<Blob[]>([]);

  const startRecord = async () => {
    mediaStream.current = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    mediaRecorder.current = new MediaRecorder(mediaStream.current);

    mediaRecorder.current.ondataavailable = (blobEvent) => {
      mediaBlobs.current.push(blobEvent.data);
    }
    mediaRecorder.current.onstop = () => {
      const blob = new Blob(mediaBlobs.current, { type: 'audio/wav' })
      const mediaUrl = URL.createObjectURL(blob);
      setAudioUrl(mediaUrl);
    }

    mediaRecorder.current?.start();
  }

  const pauseRecord = async () => {
    mediaRecorder.current?.pause();
  }

  const resumeRecord = async () => {
    mediaRecorder.current?.resume()
  }

  const stopRecord = async () => {
    mediaRecorder.current?.stop()
    mediaStream.current?.getTracks().forEach((track) => track.stop());
    mediaBlobs.current = [];
  }

  return (
    <div>
      <h1>react 录音</h1>

      <audio src={audioUrl} controls />

      <button onClick={startRecord}>开始</button>
      <button onClick={pauseRecord}>暂停</button>
      <button onClick={resumeRecord}>恢复</button>
      <button onClick={stopRecord}>停止</button>
    </div>
  );
}

export default App;
