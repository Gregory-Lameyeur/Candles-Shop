import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from '../helpers/api';



export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
 

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    try {
      const response = await axios.post('/user/login', { email, password });
      const { token, user } = response.data;
      document.cookie = `authToken=${token}; Secure; HttpOnly; SameSite=Strict; Expires=${new Date(Date.now() + 1 * 3600 * 1000).toUTCString()}`;

      if (response.status === 200) {
        // Redirigez vers l'accueil uniquement si la connexion est réussie

        window.location.href = '/';

      } else {
        setError('Identifiants incorrects');
      }
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div>
                {error && <p className="text-center text-danger">{error}</p>}
                <p className="text-center">
                  Not registered yet? <a href="/signup">Click here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
