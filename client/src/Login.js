import {useState} from 'react';
import { Link } from 'react-router-dom';
const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const HandleUserName = (event) => {
    setUserName(event.target.value);
  }
  const HandlePassword = (event) => {
    setPassword(event.target.value);
  }
  const HandleLogin = (event) => {
    console.log('Username: ' + userName);
    console.log('Password: ' + password);
  }
  return (
    <div className="Login">
      <form>
      <h2>Please Enter Login Credentials:</h2>
      <input
        type='text'
        onChange={HandleUserName}
        placeholder='Username'
      />
      <input
        type='text'
        onChange={HandlePassword}
        placeholder='Password'
      />
      </form>
      <button onClick={HandleLogin}>
        <Link to="/Home">Login</Link>
      </button>
    </div>
  );
  }
   
  export default Login;