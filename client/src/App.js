import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch('/landing')
        .then((res) => res.json())
        .then((data) => setData(data.message));
    
    
    },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <p>
          {!data ? "Loading..." : data}
        </p>
        <a href="/adminLogin">
          login
        </a>
      </header>
    </div>
  );
}

export default App;
