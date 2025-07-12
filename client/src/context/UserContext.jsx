import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the User Context
const UserContext = createContext();

// Create a Provider component to provide user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',             // New field for phone number
    address: '',           // New field for address
    notifications: true,   // New field for email notifications preference
    profilePicture: 'https://www.w3schools.com/w3images/avatar2.png', // Default profile picture
    posts: 0,
    comments: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    // Simulate an API call to fetch user data
    const fetchUserData = async () => {
      const fetchedData = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '123-456-7890',             // Simulated phone data
        address: '123 Main St, City',      // Simulated address data
        notifications: true,                // Simulated notification preference
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
        posts: 130,
        comments: 350,
        totalUsers: 1500,
      };
      setUser(fetchedData);
    };

    fetchUserData(); // Call the fetch function to load data on mount
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user data from the context
export const useUser = () => useContext(UserContext);
