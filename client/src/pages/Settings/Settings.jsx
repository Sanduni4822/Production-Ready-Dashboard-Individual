import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';  // Import Button component
import InputField from '../../components/InputField/InputField';  // Reusable InputField component
import { useUser } from '../../context/UserContext';  // Import the useUser hook

const Settings = () => {
  // Access the user data from the context
  const { user, setUser } = useUser();
  
  const [settingsData, setSettingsData] = useState({
    name: user.name || '',  // Set the initial value from context
    email: user.email || '',  // Set the initial value from context
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Update settings data when the user context changes
  useEffect(() => {
    setSettingsData({
      name: user.name || '',
      email: user.email || '',
    });
  }, [user]);

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
      // Simulating saving data and then updating context
      await new Promise((resolve) => setTimeout(resolve, 1500));  // Simulating API call delay
      
      // Update user data in the context
      setUser({
        ...user,
        name: settingsData.name,
        email: settingsData.email,
      });

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
