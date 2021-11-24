import React  from 'react';
import WorkRateList from './components/work-rate-list/work-rate-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Tina</h1>
        <WorkRateList key="work-rate" />
      </header>
    </div>
  );
}

export default App;
