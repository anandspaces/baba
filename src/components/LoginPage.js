import React from 'react';

function LoginPage() {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name*</label>
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name*</label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Id</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password*</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
