import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';  // Import Button component

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  });

  // Simulating fetching user settings from an API
  useEffect(() => {
    fetchSettingsData();
  }, []);

  const fetchSettingsData = async () => {
    // Here you would fetch settings data from your backend API
    const fetchedData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    };
    setSettingsData(fetchedData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({
      ...settingsData,
      [name]: value,  // Update the state dynamically based on the input name
    });
  };

  const handleSaveSettings = () => {
    // Handle saving settings (could be an API call)
    console.log('Settings saved:', settingsData);
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Account Settings</h2>

      {/* Settings Form */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <label className="w-full sm:w-1/3 text-lg font-medium mb-2 sm:mb-0">Name</label>
          <input
            type="text"
            name="name"
            value={settingsData.name}
            onChange={handleInputChange}
            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          <label className="w-full sm:w-1/3 text-lg font-medium mb-2 sm:mb-0">Email</label>
          <input
            type="email"
            name="email"
            value={settingsData.email}
            onChange={handleInputChange}
            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Save Settings Button */}
      <div className="mt-10 text-center">
        <Button
          label="Save Settings"
          onClick={handleSaveSettings}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600"
        />
      </div>
    </div>
  );
};

export default Settings;
