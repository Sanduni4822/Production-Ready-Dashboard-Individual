import React from 'react';
import { Helmet } from 'react-helmet'; // Importing react-helmet for SEO
import { useUser } from '../../context/UserContext'; // Import the useUser hook
import Button from '../../components/Button/Button';  // Import Button component

const Profile = () => {
  // Access user data from context using the useUser hook
  const { user } = useUser();

  return (
    <div className="flex flex-col p-6">
      <Helmet>
        <title>Profile of {user.name}</title>
        <meta name="description" content="View Jane Doe's profile including her name, email, and other details." />
        <meta name="keywords" content="profile, user profile, details, name, email" />
      </Helmet>

      <h2 className="text-3xl font-semibold text-center mb-6">Profile of {user.name}</h2>

      <div className="flex justify-center mb-8">
        <img
          src={user.profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover border-4 border-gray-200"
        />
      </div>

      {/* Flexbox layout for name and email to ensure they display properly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-medium text-gray-800">Name</h3>
          <p className="text-blue-600">{user.name}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-medium text-gray-800">Email</h3>
          <p className="text-blue-600">{user.email}</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button label="Edit Profile" onClick={() => console.log('Edit Profile clicked')} />
      </div>
    </div>
  );
};

export default Profile;
