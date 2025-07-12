import React from 'react';
import { Helmet } from 'react-helmet';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" /> {/* Example SEO control */}
      </Helmet>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
