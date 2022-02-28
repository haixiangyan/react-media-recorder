import React, {useRef, useState} from 'react';

const App = () => {
  const [audioUrl, setAudioUrl] = useState<string>('');

  const stream = useRef<MediaStream>();
  const recorder = useRef<MediaRecorder>();
  const mediaBlobs = useRef<Blob[]>([]);

  const startRecord = async () => {
    stream.current = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    recorder.current = new MediaRecorder(stream.current);

    recorder.current.ondataavailable = (blobEvent) => {
      mediaBlobs.current.push(blobEvent.data);
    }
    recorder.current.onstop = () => {
      const blob = new Blob(mediaBlobs.current, { type: 'audio/wav' })
      const mediaUrl = URL.createObjectURL(blob);
      setAudioUrl(mediaUrl);
    }

    recorder.current?.start();
  }

  const stopRecord = async () => {
    recorder.current?.stop()
    stream.current?.getTracks().forEach((track) => track.stop());
  }

  return (
    <div>
      <h1>react 录音</h1>

      <audio src={audioUrl} controls />

      <button onClick={startRecord}>开始</button>
      <button>暂停</button>
      <button>回复</button>
      <button onClick={stopRecord}>停止</button>
    </div>
  );
}

export default App;
