"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormik } from "formik";
import LoginSchema from "@/schema/LoginSchema";
import { useState } from "react";
import ForgetPasswordModel from "./ForgetPasswordModel";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUserDetails } from "@/lib/redux/features/user/userSlice";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetPasswordModelOpen, setIsForgetPasswordModelOpen] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (values: any) => {
    try {
      const res = await axios.post("/api/auth/login", values);
      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.msg);
        dispatch(addUserDetails(res.data));
        router.push("/home");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Login failed.");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      handleLogin(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="grid gap-4 2xl:gap-6 px-8">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your Email"
            className="bg-white"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        <div className="grid gap-2 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your Password"
            className="bg-white"
          />
          <button
            type="button"
            className="absolute inset-y-0 top-6 right-2 flex items-center px-2 text-gray-500 cursor-pointer"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

        <div
          onClick={() => setIsForgetPasswordModelOpen(true)}
          className="ml-auto text-xs text-blue-600 hover:underline cursor-pointer"
        >
          Forgot your password?
        </div>

        <Button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 cursor-pointer mt-4"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border-5 mt-4">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          variant="outline"
          className="w-full border-red-500 text-red-600 hover:bg-red-50 mt-4 cursor-pointer"
          type="button"
          onClick={() => {
            window.location.href = "/api/auth/google"; // Replace this if you're using next-auth
          }}
        >
          Login with Google
        </Button>

        <div className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="hover:underline underline-offset-4 text-red-700">
            Register
          </Link>
        </div>
      </form>

      <ForgetPasswordModel
        open={isForgetPasswordModelOpen}
        onOpenChange={setIsForgetPasswordModelOpen}
      />
    </>
  );
};

export default LoginForm;
