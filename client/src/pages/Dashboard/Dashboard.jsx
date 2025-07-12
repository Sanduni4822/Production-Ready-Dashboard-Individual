import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; 
import { useUser } from '../../context/UserContext'; 
import Card from '../../components/Card/Card'; 

const Dashboard = () => {
  const { user } = useUser();

  const [recentActivity, setRecentActivity] = useState([
    { activity: 'Liked a post', timestamp: '2 minutes ago' },
    { activity: 'Commented on a post', timestamp: '30 minutes ago' },
    { activity: 'Joined a new group', timestamp: '1 hour ago' },
  ]);

  useEffect(() => {
    // fetch data or initialization logic here if needed
  }, []);

  return (
    <div className="flex flex-col p-4 sm:p-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Dashboard - {user.name}</title>
        <meta
          name="description"
          content="View your account statistics, posts, comments, and recent activity."
        />
        <meta name="keywords" content="dashboard, user stats, posts, comments, activity" />
      </Helmet>

      {/* Welcome message */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
        Welcome, {user.name}
      </h2>

      {/* User stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users" content={user.totalUsers} />
        <Card title="Posts" content={user.posts} />
        <Card title="Comments" content={user.comments} />
        {/* Followers with fallback to 0 if undefined or null */}
        <Card title="Followers" content={user.followers ?? 0} />
      </div>

      {/* Recent activity */}
      <div className="mt-10">
        <h3 className="text-2xl font-medium mb-4">Recent Activity</h3>
        <ul className="max-h-60 overflow-y-auto">
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
    </div>
  );
};

export default Dashboard;
