// src/pages/Login/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

// Validation schema using Yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data.email === 'jane.doe@example.com' && data.password === 'admin123') {
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
      localStorage.setItem('authToken', 'dummy-auth-token');
      toast.success('Login successful! Redirecting...');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      toast.error('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputField
            label="Email"
            type="email"
            {...register('email')}
          />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email.message}</p>}

          <InputField
            label="Password"
            type="password"
            {...register('password')}
          />
          {errors.password && <p className="text-red-600 text-sm mb-2">{errors.password.message}</p>}

          <Button type="submit" label={isSubmitting ? 'Logging in...' : 'Login'} disabled={isSubmitting} />
        </form>
      </div>
    </div>
  );
};

export default Login;
