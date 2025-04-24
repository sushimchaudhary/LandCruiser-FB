'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot Your Password?
        </h2>

        <p className="text-gray-600 text-center mb-6 text-sm">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold cursor-pointer py-2 px-4 rounded-lg"
          >
            Send Reset Link
          </button>

          <div className="text-center mt-4 text-sm">
            Remember your password?{' '}
            <button
              type="button"
              onClick={() => router.push('/login')}
              className="text-red-400 hover:text-red-600 cursor-pointer font-semibold"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
