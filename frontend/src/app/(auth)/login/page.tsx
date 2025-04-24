"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../../lib/redux/features/user/userSlice";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // for smooth animation

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

interface LoginValues {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: LoginValues) => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8000/login", values);
      setLoading(false);

      if (data?.msg) {
        toast.success(data.msg);
      } else {
        toast.success("Login successful!");
      }

      dispatch(addUserDetails(data));

      setTimeout(() => {
        router.push("/home");
      }, 100);
    } catch (err: unknown) {
      setLoading(false);
      if (axios.isAxiosError(err) && err.response?.data?.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error(
          (err as Error).message || "An error occurred during login."
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="flex max-w-4xl w-full bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <motion.div
          className="relative w-1/2 h-auto hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/img4.jpg"
            alt="Login Image"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="flex flex-col justify-center w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            
            Welcom To The LandCruiser
          </h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form className="space-y-1">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className={`mt-1 block w-full bg-gray-200 rounded-md border-red-600 shadow-sm p-3 focus:ring-indigo-300 focus:border-indigo-400 ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className={`mt-1 block w-full bg-gray-200 rounded-md border-red-600 shadow-sm p-3 focus:ring-red-500 focus:border-red-600 ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  {/*  Forgot Password Link */}
                  <div className="text-right mt-2">
                    <Link
                      href="/forgot"
                      className="text-sm text-indigo-600 hover:text-red-500 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className={`w-full py-3 rounded-md text-white font-semibold flex items-center cursor-pointer justify-center ${
                    loading
                      ? "bg-red-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-500 transition-all"
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </Form>
            )}
          </Formik>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 hover:text-red-500 hover:underline"
            >
              Register here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
