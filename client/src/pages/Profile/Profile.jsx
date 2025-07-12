import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO
import Card from '../../components/Card/Card';  // Import Card component
import Button from '../../components/Button/Button';  // Import Button component

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',  // Placeholder image
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    // Simulating fetching data
    const fetchedData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',  // New image URL for testing
    };
    setUserData(fetchedData);
  };

  return (
    <div className="flex flex-col p-6">
      <Helmet>
        <title>Profile of {userData.name}</title>
        <meta name="description" content="View Jane Doe's profile including her name, email, and other details." />
        <meta name="keywords" content="profile, user profile, details, name, email" />
      </Helmet>

      <h2 className="text-3xl font-semibold text-center mb-6">Profile of {userData.name}</h2>

      <div className="flex justify-center mb-8">
        <img
          src={userData.profilePicture || 'https://via.placeholder.com/150'}
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
