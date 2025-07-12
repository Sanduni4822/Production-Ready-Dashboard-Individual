// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const Login = () => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();  // Use existing user from context

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Compare with context user credentials
    if (emailInput === user.email && passwordInput === user.password) {
      localStorage.setItem('authToken', 'dummy-auth-token');
      navigate('/dashboard');
    } else {
      setShowModal(true); // Show error modal
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            id="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <Button type="submit" label="Login" />
        </form>
      </div>

      {/* Modal for Invalid Credentials */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl text-red-600">Invalid Credentials</h2>
        <p>Please check your email and password.</p>
      </Modal>
    </div>
  );
};

export default Login;
