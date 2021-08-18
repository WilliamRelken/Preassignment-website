import {useState} from 'react';
import { Link } from 'react-router-dom'

function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cookie, setCookie] = useState('');

  const xhttp = new XMLHttpRequest();

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
          .catch((error) => {} );

      console.log(getCookie("cookie"));

      /*const builtJSON = "{\"username\":\"" + userName + "\", \"password\":\""  + password + "\"}";


      xhttp.open("POST", "/adminlogin", true);
      xhttp.send(JSON.parse(builtJSON));
          //.then((user, pass) => { setUserName(user.username + " returned"); setPassword(user.password + " returned")});*/

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
        type='password'
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