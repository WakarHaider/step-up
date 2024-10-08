import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../../components/animatedButton/LoginButton';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null);
  const [stopanimation, setStopanimation] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Stop the animation after 2 seconds
    const timer = setTimeout(() => {
      setStopanimation(true);
    }, 2000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (userName === 'wakar' && password === '1234') {
      setStatus(true)
      setTimeout(() => {
        navigate('/home');
      }, 4000);
    } else {
      setStatus(false)
      setError('Invalid username or password');
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen bg-gray-200 bg-login-background bg-cover bg-center ${!stopanimation ? "animate-bounce" : ""}`}>
      <div className={`p-6 bg-white rounded shadow-md w-full max-w-md h-fit ${!stopanimation ? "animate-spin" : status===true ? "animate-pulse" : ""}`}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value.toLowerCase())} // Convert input to lowercase
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {/* <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Login
          </button> */}
          <div className='flex w-full justify-center items-center'>
            <LoginButton onClick={handleSubmit} status={status} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
