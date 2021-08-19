import { Link } from "react-router-dom";

function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

function userLogout(){
    if(isAuth()){
        document.cookie = 'id=;';
        document.cookie = 'username=;';
        console.log("logged out");
        window.location.replace("/");
    }
}

function isAuth(){
    if(getCookie("id") == ""){
        return false;
    } else{
        return true;
    }
}

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Silicon Spiders - VMS</h1>
        <div className="links">
          <Link to="/Volunteers">Manage Volunteers</Link>
          <Link to="/Opportunities">Manage Opportunities</Link>
          <button onClick={() => {userLogout()}} style={{
              color: "white",
              backgroundColor: 'red',
              borderRadius: '8px',
              fontSize: '11pt',
              padding: '10px'
          }}>Logout, {getCookie("username")}</button>
        </div>
      </nav>
    );
  }
  export default Navbar;