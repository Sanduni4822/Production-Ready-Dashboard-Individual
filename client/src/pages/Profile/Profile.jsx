import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';  // Import Card component
import Button from '../../components/Button/Button';  // Import Button component

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',  // Fallback placeholder image
  });

  // Simulating fetching user data from an API
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    // Here you would fetch data from your backend API
    const fetchedData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',  // New image URL for testing
    };
    setUserData(fetchedData);
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Profile of {userData.name}</h2>

      <div className="flex justify-center mb-8">
        <img
          src={userData.profilePicture || 'https://via.placeholder.com/150'}  // Fallback image if profile pic is missing
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover border-4 border-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card title="Name" content={userData.name} />
        <Card title="Email" content={userData.email} />
      </div>

      <div className="mt-10 text-center">
        <Button label="Edit Profile" onClick={() => console.log('Edit Profile clicked')} />
      </div>
    </div>
  );
};

export default Profile;
