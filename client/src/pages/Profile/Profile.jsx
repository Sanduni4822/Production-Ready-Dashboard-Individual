import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useUser } from '../../context/UserContext';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const startEditing = () => {
    reset({
      name: user.name,
      email: user.email,
    });
    setIsEditing(true);
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        ...user,
        name: data.name,
        email: data.email,
      });
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="flex flex-col p-6 max-w-md mx-auto">
      <Helmet>
        <title>Profile of {user.name}</title>
        <meta
          name="description"
          content={`View and edit profile of ${user.name}`}
        />
      </Helmet>

      <h2 className="text-3xl font-semibold text-center mb-6">
        Profile of {user.name}
      </h2>

      <div className="flex justify-center mb-8">
        <img
          src={user.profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover border-4 border-gray-200"
        />
      </div>

      {!isEditing ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-medium text-gray-800">Name</h3>
              <p className="text-blue-600">{user.name}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-blue-600">{user.email}</p>
            </div>
          </div>

          <div className="text-center">
            <Button label="Edit Profile" onClick={startEditing} />
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
          />

          <InputField
            label="Email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email address',
              },
            })}
            error={errors.email?.message}
          />

          <div className="flex justify-between">
            <Button
              type="submit"
              label={isSubmitting ? 'Saving...' : 'Save'}
              disabled={isSubmitting}
            />
            <Button
              type="button"
              label="Cancel"
              onClick={() => setIsEditing(false)}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
