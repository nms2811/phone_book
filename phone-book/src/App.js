import React from 'react';
import CreateInfo from './components/CreateInfo';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "container" >
          <CreateInfo />
      </div>
      <Table />
    </div>
  );
}

export default App;
