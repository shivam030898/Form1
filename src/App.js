import React from 'react';
import './App.css';

function App() {
  return (
    
    <div>
      <h1>Create Namespace</h1>
      <div className="form-container">
      <form>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-row">
          <label htmlFor="select">Cluster:</label>
          <select id="select" name="select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="form-row">
          <label className='env'htmlFor="env">Environment:</label>
          <div className="button-group">
            <button type="button">Prod</button>
            <button type="button">Non Prod</button>
          </div>
        </div>
        <div className="form-row1">
          <label htmlFor="input1">Request Limits:</label>
          <br />
          <input type="text" id="input1" name="input1" placeholder="CPU" />
        </div>
        <div className="form-row1">
          <input type="text" id="input2" name="input2" placeholder="Memory" />
        </div>
        <div className="form-row">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
    </div>
  
  );
}

export default App;
