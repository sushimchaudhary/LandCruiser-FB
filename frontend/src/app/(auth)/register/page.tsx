'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Define TypeScript interface for form values
interface RegisterValues {
  fullName?: string;
  email: string;
  phoneNumber: string;
  password: string;
}

// Define validation schema
const RegisterSchema = Yup.object().shape({
  fullName: Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string()
    .matches(/\+?[1-9][0-9]{7,14}/, 'Invalid phone number')
    .required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

export const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (values: RegisterValues): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await axios.post<{ msg: string }>('http://localhost:7001/register', values);
      setLoading(false);

      if (data?.msg) {
        toast.success(data.msg);
      } else {
        toast.success("Registration successful!");
      }

      setTimeout(() => {
        router.push('/login');
      }, 100);

    } catch (err: unknown) {
      setLoading(false);
      if (axios.isAxiosError(err) && err.response?.data?.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error((err as Error).message || "An error occurred during registration.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="flex max-w-4xl w-full bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
    
        {/* Left side - Image */}
        <motion.div 
          className="relative w-1/2 h-auto hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image  
            src="/img4.jpg" 
            alt="Register" 
            layout="fill" 
            objectFit="cover" 
          />
        </motion.div>
    
        {/* Right side - Form */}
        <motion.div 
          className="flex flex-col justify-center w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-1">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>
    
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values: RegisterValues) => handleRegister(values)}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                {[ 
                  { label: 'Full Name', name: 'fullName', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Phone Number', name: 'phoneNumber', type: 'tel' },
                  { label: 'Password', name: 'password', type: 'password' },
                ].map(({ label, name, type }) => (
                  <div key={name} className="space-y-1">
                    <label htmlFor={name} className="block text-sm font-medium  text-gray-700">{label}</label>
                    <Field
                      name={name}
                      type={type}
                      className={`mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 ${
                        errors[name as keyof RegisterValues] && touched[name as keyof RegisterValues] ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                ))}

                <Button
                  type="submit"
                  className={`w-full py-3 rounded-md text-white font-semibold flex items-center justify-center ${
                    loading ? 'bg-red-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 transition-colors'
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      <span>Registering...</span>
                    </div>
                  ) : (
                    <span>Register</span>
                  )}
                </Button>
              </Form>
            )}
          </Formik>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:text-red-500 hover:underline">
              Login here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
