import React from 'react';
import { Link } from 'react-router-dom';
function SigninScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
    //rest of codes
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            {/* {loading && <div>Loading...</div>}
            {error && <div>{error}</div>} */}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              //   onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              //   onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit" className="button primary">
              Signin
            </button>
          </li>
          <li>New to amazona?</li>
          <li>
            <Link
              to="/register"
              //   to={
              //     redirect === '/' ? 'register' : 'register?redirect=' + redirect
              //   }

              //   className="button secondary text-center"
              className="button secondary text-center"
            >
              Create your amazona account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
