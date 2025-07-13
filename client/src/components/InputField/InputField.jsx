import React from 'react';
import { Helmet } from 'react-helmet';

const InputField = React.forwardRef(({ label, type, error, ...rest }, ref) => {
  return (
    <div className="mb-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        ref={ref}
        {...rest}
        className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
    </div>
  );
});

export default InputField;
