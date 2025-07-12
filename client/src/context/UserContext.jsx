import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the User Context
const UserContext = createContext();

// Create a Provider component to provide user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    profilePicture: 'https://www.w3schools.com/w3images/avatar2.png', // Default profile picture
  });

  useEffect(() => {
    // Simulate an API call to fetch user data
    const fetchUserData = async () => {
      const fetchedData = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png', // Fetched user data
      };
      setUser(fetchedData);
    };

    fetchUserData(); // Call the fetch function to load data
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user data
export const useUser = () => useContext(UserContext);
