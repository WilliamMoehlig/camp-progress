import React, { useRef, useEffect, useState } from 'react';

function Login() {
  const nameRef = useRef();
  const passRef = useRef();
  const [showLabel, setShowLabel] = useState();
  useEffect(() => {
    nameRef.current.focus();
    setShowLabel(false);
  }, []);

  function isValid() {
    const users = [{ user: 'admin', pass: 'secret' }, { user: 'user', pass: 'pass' }];
    const formUser = { user: nameRef.current.value, pass: passRef.current.value };
    const valid = users.find(u => u.user === formUser.user && u.pass === formUser.pass);
    return valid;
  }

  const submit = e => {
    e.preventDefault();

    if (!isValid()) {
      nameRef.current.focus();
      nameRef.current.value = '';
      passRef.current.value = '';
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-sm-6">
          <div className="card-body">
            <h4 className="card-title">Sign in</h4>
            {showLabel && (
              <p className="text-danger text-center" role="alert">
                Unknown user or password
              </p>
            )}
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="username">Your username</label>
                <input className="form-control" ref={nameRef} placeholder="username" type="text" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Your password</label>
                <input ref={passRef} className="form-control" placeholder="******" type="password" id="password" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
