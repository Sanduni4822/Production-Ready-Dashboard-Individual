import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO
import Button from '../../components/Button/Button';  // Import Button component
import InputField from '../../components/InputField/InputField';  // Reusable InputField component

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    name: '',
    email: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSettingsData();
  }, []);

  const fetchSettingsData = async () => {
    try {
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
    if (!settingsData.name || !settingsData.email) {
      setMessage('Please fill in all fields');
      return;
    }

    setIsSaving(true);
    setMessage('Saving...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));  // Simulate API delay
      setIsSaving(false);
      setMessage('Settings saved successfully');
    } catch (error) {
      setIsSaving(false);
      setMessage('Error saving settings');
    }
  };

  return (
    <div className="flex flex-col p-6">
      <Helmet>
        <title>Account Settings - {settingsData.name}</title>
        <meta name="description" content="Edit your account settings including your name and email address." />
        <meta name="keywords" content="settings, account settings, update name, email" />
      </Helmet>

      <h2 className="text-3xl font-semibold text-center mb-6">Account Settings</h2>

      {message && (
        <div className={`mb-4 text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}

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

      <div className="mt-10 text-center">
        <Button
          label={isSaving ? 'Saving...' : 'Save Settings'}
          onClick={handleSaveSettings}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isSaving}
        />
      </div>
    </div>
  );
};

export default Settings;
