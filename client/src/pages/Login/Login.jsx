import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { useUser } from '../../context/UserContext';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const Login = () => {
  const navigate = useNavigate();  // Initialize navigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      const userData = {
        name: 'Admin User',
        email: 'admin@example.com',
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
      };
      setUser(userData);  // Update context user data
      localStorage.setItem('authToken', 'dummy-auth-token');  // Set token in localStorage
      navigate('/dashboard');  // Redirect to dashboard page
    } else {
      setShowModal(true);  // Show error modal
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" label="Login" />
        </form>
      </div>

      {/* Modal for Invalid Credentials */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl text-red-600">Invalid Credentials</h2>
        <p>Please check your username and password and try again.</p>
      </Modal>
    </div>
  );
};

export default Login;
