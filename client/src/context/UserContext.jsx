import React, { createContext, useState, useContext, useEffect } from 'react';

// Default user object exported for reuse
export const defaultUser = {
  name: '',
  email: '',
  phone: '',
  address: '',
  notifications: true,
  profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
  posts: 0,
  comments: 0,
  totalUsers: 0,
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    const fetchUserData = async () => {
      // Simulate fetching user data (replace with real API call)
      const fetchedData = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City',
        notifications: true,
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
        posts: 130,
        comments: 350,
        totalUsers: 1500,
      };
      setUser(fetchedData);
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
