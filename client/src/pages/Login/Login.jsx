import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email/password check
    if (email === 'jane.doe@example.com' && password === 'admin123') {
      const userData = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City',
        notifications: true,
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
        posts: 130,
        comments: 350,
        totalUsers: 1500,
      };

      setUser(userData);
      localStorage.setItem('authToken', 'dummy-auth-token'); // Save token
      navigate('/dashboard'); // Redirect on success
    } else {
      setShowModal(true); // Show invalid credentials modal
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl text-red-600">Invalid Credentials</h2>
        <p>Please check your email and password and try again.</p>
      </Modal>
    </div>
  );
};

export default Login;
