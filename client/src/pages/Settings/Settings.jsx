import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import { useUser } from '../../context/UserContext';

const Settings = () => {
  const { user, setUser } = useUser();
  const [message, setMessage] = useState('');

  // Setup react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      phone: user.phone || '',
      address: user.address || '',
      notificationsEnabled: user.notificationsEnabled ?? true,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  // Reset form if user changes (simulate fetching updated user)
  useEffect(() => {
    reset({
      phone: user.phone || '',
      address: user.address || '',
      notificationsEnabled: user.notificationsEnabled ?? true,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  }, [user, reset]);

  // Watch newPassword and confirmNewPassword for validation
  const newPassword = watch('newPassword');

  const onSubmit = async (data) => {
    setMessage('');
    if (data.newPassword !== data.confirmNewPassword) {
      setMessage('New passwords do not match');
      return;
    }

    // Simulate API call delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update user context (replace with real API call in production)
      setUser({
        ...user,
        phone: data.phone,
        address: data.address,
        notificationsEnabled: data.notificationsEnabled,
      });

      setMessage('Settings saved successfully!');
    } catch (error) {
      setMessage('Error saving settings');
    }
  };

  return (
    <div className="flex flex-col p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Account Settings</h2>

      {message && (
        <div
          className={`mb-4 text-center ${
            message.includes('Error') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          label="Phone Number"
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\+?[0-9\s\-()]{7,}$/,
              message: 'Invalid phone number format',
            },
          })}
          error={errors.phone?.message}
        />

        <InputField
          label="Address"
          type="text"
          {...register('address', { required: 'Address is required' })}
          error={errors.address?.message}
        />

        <div className="flex items-center space-x-3">
          <input
            id="notifications"
            type="checkbox"
            {...register('notificationsEnabled')}
            className="h-5 w-5 text-blue-600"
          />
          <label htmlFor="notifications" className="font-medium text-gray-700">
            Enable Email Notifications
          </label>
        </div>

        <InputField
          label="Current Password"
          type="password"
          {...register('currentPassword', {
            required: 'Current password is required to change password',
            minLength: { value: 6, message: 'Minimum length is 6 characters' },
          })}
          error={errors.currentPassword?.message}
        />

        <InputField
          label="New Password"
          type="password"
          {...register('newPassword', {
            minLength: {
              value: 6,
              message: 'New password must be at least 6 characters',
            },
          })}
          error={errors.newPassword?.message}
        />

        <InputField
          label="Confirm New Password"
          type="password"
          {...register('confirmNewPassword', {
            validate: (value) =>
              value === newPassword || 'Passwords do not match',
          })}
          error={errors.confirmNewPassword?.message}
        />

        <div className="text-center">
          <Button
            type="submit"
            label={isSubmitting ? 'Saving...' : 'Save Settings'}
            disabled={isSubmitting || !isDirty}
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
