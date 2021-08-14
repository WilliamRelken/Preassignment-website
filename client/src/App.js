import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const [user, setData] = React.useState(null);
    const [pass, setPass] = React.useState(null);
    
  //this gets a response from the adminlogin page and sets the data. testing purposes.
    React.useEffect(() => {
        fetch('/adminLogin')
            .then((res) => res.json())
            .then((user, pass) => { setData(user.username); setPass(user.password)});
    
    
    },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <p>
                  hello {!user ? "Loading..." : user}, pass: {!pass ? "Loading..." : pass}
        </p>
        <a href="/adminLogin">
          login
        </a>
      </header>
    </div>
  );
}

export default App;
