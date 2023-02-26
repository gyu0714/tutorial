import React, { useEffect, useState } from 'react';
import './App.css';
import { cubeResultApi } from './api';
import { ICubeResult } from './type/type';

function App() {
  const [cubeResult, setCubeResult] = useState<ICubeResult>();

  useEffect(() => {
    cubeResultApi({ count: 10, date: '2023-01-01' });
  }, []);
  return <></>;
}

export default App;
