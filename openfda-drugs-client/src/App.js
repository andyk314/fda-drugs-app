import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Please update this page as you see fit to accomplish the following:</p>
        <ol className='App-task-list'>
          <li>Display search results.</li>
          <li>Add the ability to order search results by brand name (alphabetical), dosage form, and product number.</li>
          <li>Add the ability to click on a product and store the search conversion.</li>
          <li>Display the number of conversions next to search results.</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
