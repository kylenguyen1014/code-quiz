import React from 'react';
import './App.css';
import GridItem from './components/GridItem/GridItem';
import { GridList } from './shared/constants/gridList';

function App() {
  return (
    <div className="App">
      <div className='App-container'>

        <h3 className="App-title">
          <div/>
          <span>
            MEET THE TEAM
          </span>
          <div/>
        </h3>
        <div className="App-grid-container">
        {
          GridList.map((grid, i) => <GridItem key={i} grid={grid}/>)
        }
        </div>
        <div className='App-footer'>
          <div />
          <span>♦</span>
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
