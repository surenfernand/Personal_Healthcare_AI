import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

function App() {
  const webcamRef = useRef(null);
  const [result, setResult] = useState("");

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    const blob = await (await fetch(imageSrc)).blob();
    const formData = new FormData();
    formData.append('image', blob, 'rash.jpg');

    const res = await axios.post('http://localhost:5000/predict', formData);
    setResult(`Prediction: ${res.data.label}, Confidence: ${(res.data.confidence * 100).toFixed(2)}%`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Skin Rash Detector</h1>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <br />
      <button onClick={capture}>Capture & Predict</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
