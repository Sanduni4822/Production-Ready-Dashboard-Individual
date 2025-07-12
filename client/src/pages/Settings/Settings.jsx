import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import { useUser } from '../../context/UserContext';

const Settings = () => {
  const { user, setUser } = useUser();

  const [settingsData, setSettingsData] = useState({
    phone: user.phone || '',
    address: user.address || '',
    notificationsEnabled: user.notificationsEnabled ?? true,  // boolean toggle
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSettingsData((prev) => ({
      ...prev,
      phone: user.phone || '',
      address: user.address || '',
      notificationsEnabled: user.notificationsEnabled ?? true,
    }));
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettingsData({
      ...settingsData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSaveSettings = async () => {
    // Basic validation
    if (
      settingsData.newPassword &&
      settingsData.newPassword !== settingsData.confirmNewPassword
    ) {
      setMessage('New passwords do not match');
      return;
    }

    setIsSaving(true);
    setMessage('Saving...');

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update context (in real app, update backend and refresh user data)
      setUser({
        ...user,
        phone: settingsData.phone,
        address: settingsData.address,
        notificationsEnabled: settingsData.notificationsEnabled,
      });

      setIsSaving(false);
      setMessage('Settings saved successfully');
    } catch (error) {
      setIsSaving(false);
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

      <div className="space-y-6">
        <InputField
          label="Phone Number"
          name="phone"
          value={settingsData.phone}
          onChange={handleInputChange}
          type="tel"
        />

        <InputField
          label="Address"
          name="address"
          value={settingsData.address}
          onChange={handleInputChange}
          type="text"
        />

        <div className="flex items-center space-x-3">
          <input
            id="notifications"
            name="notificationsEnabled"
            type="checkbox"
            checked={settingsData.notificationsEnabled}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600"
          />
          <label htmlFor="notifications" className="font-medium text-gray-700">
            Enable Email Notifications
          </label>
        </div>

        <InputField
          label="Current Password"
          name="currentPassword"
          value={settingsData.currentPassword}
          onChange={handleInputChange}
          type="password"
        />

        <InputField
          label="New Password"
          name="newPassword"
          value={settingsData.newPassword}
          onChange={handleInputChange}
          type="password"
        />

        <InputField
          label="Confirm New Password"
          name="confirmNewPassword"
          value={settingsData.confirmNewPassword}
          onChange={handleInputChange}
          type="password"
        />
      </div>

      <div className="mt-10 text-center">
        <Button
          label={isSaving ? 'Saving...' : 'Save Settings'}
          onClick={handleSaveSettings}
          disabled={isSaving}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400"
        />
      </div>
    </div>
  );
};

export default Settings;
