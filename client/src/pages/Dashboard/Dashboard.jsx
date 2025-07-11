// import React, { useState, useEffect } from 'react';
// // import Card from '../../components/Card'; // Reusable Card component

// const Dashboard = () => {
//   const [userStats, setUserStats] = useState({
//     totalUsers: 1200,
//     posts: 340,
//     comments: 560,
//   });

//   const [recentActivity, setRecentActivity] = useState([
//     { activity: 'Posted a new comment', time: '2 minutes ago' },
//     { activity: 'Joined a new group', time: '1 hour ago' },
//     { activity: 'Started a new thread', time: '3 hours ago' },
//   ]);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-blue-600">Dashboard</h1>
//       <div className="grid grid-cols-3 gap-6 mb-6">
//         <Card title="Total Users" content={userStats.totalUsers} />
//         <Card title="Total Posts" content={userStats.posts} />
//         <Card title="Total Comments" content={userStats.comments} />
//       </div>
//       <div>
//         <h2 className="text-2xl font-semibold text-blue-600 mb-4">Recent Activity</h2>
//         <div className="space-y-4">
//           {recentActivity.map((item, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <p className="text-gray-800">{item.activity}</p>
//               <span className="text-sm text-gray-500">{item.time}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
