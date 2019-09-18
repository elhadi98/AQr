import React from 'react';
import './App.css';
import Camera from './fragments/Camera';
import Display from './fragments/Display';

function App() {

  return (
		<>
			<Camera>
				{({stream}) => (
					<Display stream={stream} crop/>
				)}
			</Camera>
		</>
  );
}

export default App;
