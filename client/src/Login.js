import {useState} from 'react';
import { Link } from 'react-router-dom'

function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

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
      const builtJSON = "{\"username\":\"" + userName + "\", \"password\":\""  + password + "\"}";

      fetch("/adminlogin", {
          method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify({

              username: userName,
              password: password

              })


      }).then(res => res.json())
          .catch((error) => {} )
          .then(() =>{
              if (getCookie("id") == ""){
                  alert("incorrect login credentials.");
              } else{
                  console.log(getCookie("id"));
                  window.location.replace("/Home");
              }
          });

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
        type='password'
        onChange={HandlePassword}
        placeholder='Password'
      />
      </form>
      <button onClick={HandleLogin}>
          Login
      </button>
    </div>
  );
  }
   
  export default Login;