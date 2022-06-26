const Navbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                  <a class="navbar-brand text-white" href="#">My React App</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="#">Profile</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">Register</a>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;