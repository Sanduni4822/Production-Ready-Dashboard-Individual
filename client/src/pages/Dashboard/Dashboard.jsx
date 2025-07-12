import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO
import { useUser } from '../../context/UserContext'; // Import the useUser hook
import Card from '../../components/Card/Card'; // Import Card component
import Button from '../../components/Button/Button'; // Import Button component

const Dashboard = () => {
  // Access user data from context using the useUser hook
  const { user } = useUser();

  const [recentActivity, setRecentActivity] = useState([
    { activity: 'Liked a post', timestamp: '2 minutes ago' },
    { activity: 'Commented on a post', timestamp: '30 minutes ago' },
    { activity: 'Joined a new group', timestamp: '1 hour ago' },
  ]);

  useEffect(() => {
    // Fetch user data or any other necessary logic for dashboard
  }, []);

  return (
    <div className="flex flex-col p-6">
      <Helmet>
        <title>Dashboard - {user.name}</title>
        <meta name="description" content="View your account statistics, posts, comments, and recent activity." />
        <meta name="keywords" content="dashboard, user stats, posts, comments, activity" />
      </Helmet>

      <h2 className="text-3xl font-semibold text-center mb-6">Welcome, {user.name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users" content={user.totalUsers} />
        <Card title="Posts" content={user.posts} />
        <Card title="Comments" content={user.comments} />
        <Card title="Followers" content="N/A" />
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-medium mb-4">Recent Activity</h3>
        <ul>
          {recentActivity.map((activity, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between items-center">
                <span>{activity.activity}</span>
                <span className="text-gray-600">{activity.timestamp}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <Button label="Log Out" onClick={() => console.log('Logged out')} />
      </div>
    </div>
  );
};

export default Dashboard;
