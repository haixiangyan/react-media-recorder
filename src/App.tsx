import React from 'react';
import AudioRecorder from "./AudioRecorder";
import CameraRecorder from "./CameraRecorder";
import ScreenRecorder from "./ScreenRecorder";

const App = () => {
  return (
    <div>
      <h1>Recorder</h1>

      <AudioRecorder />

      <CameraRecorder />

      <ScreenRecorder />
    </div>
  );
}

export default App;
