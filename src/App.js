import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => setToggle(prev => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div className="App">
      { 
        toggle === true 
        && <div data-testId='toggle-elem'>toggle</div>
      }
      { 
        data && 
        <div style={{color: 'red'}}>data</div> 
      }
      <h1 data-testId="value-elem">{ value }</h1>
      <button
        data-testId="toggle-btn"
        onClick={onClick}
      >
        click me
      </button>
      <input
        type="text"
        placeholder="input value"
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
