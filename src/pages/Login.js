function Login() {
  return (
    <div className="row mt-5" style={{"backgroundColor": "#F9FEFE", "minHeight": "100vh"}}>
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div style={{ "flex": "8" }}>
            <img className="container" src="https://i.ibb.co/V9GXxG8/Fams-Track-s-2-removebg-preview.png" width="auto" style={{ "maxWidth": "400px" }} />
          </div>
          <div className="container" style={{ "flex": "4" }}>
            <h2 className="p-3">Welcome Back!</h2>
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <button className="btn btn-primary mt-3 mb-5">Log In</button>
            </form>
          </div>
        </div>
        <div className="container mt-5">
          <div className="container" style={{ "textAlign": "left" }}>
            <h1>Best Tracking App</h1>
            <p>Are you worried that your family will get lost during their Hajj trip, or are you a travel tour vendor who wants to be able to monitor the whereabouts of your congregation? Calm down, FamTrack is here to help you. FamTrack is an IoT-based application that can monitor the whereabouts of your family or congregation and we also have a panic button feature if your family or clients get lost.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}

export default Login;
