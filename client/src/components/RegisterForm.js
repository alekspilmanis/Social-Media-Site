const RegisterForm = () => {
    return (
        <div>     
            <form className="shadow">
            <h1 className="text-center">Register</h1>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <label for="exampleInputEmail1" className="form-label"> Confirm Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;