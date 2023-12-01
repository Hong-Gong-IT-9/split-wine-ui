import React from 'react';
import logo from './logo.svg';
import './App.css';
import WineList from './components/WineList';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <h1>Split Wine</h1>
      <Login/>
      {/* <WineList/> */}

    </div>
);
}

export default App;
