import { fetchData } from "../../main.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js";


const Register = () => {
  const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext);

  const {username, password, password2} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", 
      {
       username,
       password
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        console.log(data)
        updateUser("authenticated", true)
        navigate("/profile") 
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }



return (
  <div>     
    <form className="shadow" onSubmit={onSubmit}>
      <h1 className="text-center">Register</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="username" onChange={onChange} value={username} required/>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={password} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password2" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password2" name="password2" onChange={onChange} value={password2} required/>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
    </form>
  </div>
);
}

export default Register;