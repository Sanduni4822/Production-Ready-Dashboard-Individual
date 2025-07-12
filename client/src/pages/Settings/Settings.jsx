import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';  // Import Button component
import InputField from '../../components/InputField/InputField';  // Reusable InputField component

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    name: '',
    email: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Simulating fetching user settings from an API
  useEffect(() => {
    fetchSettingsData();
  }, []);

  const fetchSettingsData = async () => {
    try {
      // Here you would fetch settings data from your backend API
      const fetchedData = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      };
      setSettingsData(fetchedData);
    } catch (error) {
      setMessage('Error fetching settings data');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({
      ...settingsData,
      [name]: value,
    });
  };

  const handleSaveSettings = async () => {
    // Form validation before saving
    if (!settingsData.name || !settingsData.email) {
      setMessage('Please fill in all fields');
      return;
    }

    setIsSaving(true);
    setMessage('Saving...');

    try {
      // Here you would handle the API call to save settings
      await new Promise((resolve) => setTimeout(resolve, 1500));  // Simulating API call delay
      setIsSaving(false);
      setMessage('Settings saved successfully');
    } catch (error) {
      setIsSaving(false);
      setMessage('Error saving settings');
    }
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Account Settings</h2>

      {/* Feedback Message */}
      {message && (
        <div className={`mb-4 text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}

      {/* Settings Form */}
      <div className="space-y-6">
        <InputField
          label="Name"
          name="name"
          value={settingsData.name}
          onChange={handleInputChange}
        />

        <InputField
          label="Email"
          name="email"
          value={settingsData.email}
          onChange={handleInputChange}
          type="email"
        />
      </div>

      {/* Save Settings Button */}
      <div className="mt-10 text-center">
        <Button
          label={isSaving ? 'Saving...' : 'Save Settings'}
          onClick={handleSaveSettings}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isSaving}  // Disable the button while saving
        />
      </div>
    </div>
  );
};

export default Settings;
