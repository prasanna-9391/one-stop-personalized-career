import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex p-0">

      {/* Left Panel */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center text-white p-5"
        style={{
          background: "linear-gradient(135deg,#1E1B4B,#11182C,#020617)"
        }}
      >
        <h1 className="display-5 fw-bold mb-4">
          OneStop Career Advisor
        </h1>

        <p className="fs-5">
          Your personalized learning & career companion.
        </p>
      </div>

      {/* Right Panel */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">

        <div style={{ width: "350px" }}>

          <h2 className="fw-bold mb-4">
            Login
          </h2>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
            />
          </div>

          {/* Button */}
          <button className="btn btn-primary w-100 btn-lg">
            Login
          </button>

          {/* Signup Link */}
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;