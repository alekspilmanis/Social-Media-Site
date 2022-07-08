import { fetchData } from "../../main.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js";

//Use navigate to go to profile page

const Login = () => {

  const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext);

  const {username, password} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/login", 
      {
       username,
       password
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        console.log(data)
        updateUser("autheticated", true)
        navigate("/profile") 
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

    return(
        <div>     
            <form className="shadow" onSubmit={onSubmit}>
            <h1 className="text-center">Login</h1>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" onChange={onChange} value={username} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={password} required/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;