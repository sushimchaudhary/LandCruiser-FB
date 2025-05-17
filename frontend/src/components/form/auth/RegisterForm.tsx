import { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import RegisterSchema from "@/schema/RegisterSchema";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (values: any) => {
    const toastId = toast.loading("Creating account...");
    try {
      const res = await axios.post("/api/v1/auth/register", values);
      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.msg, { id: toastId });
        router.push("/login");
      } else {
        toast.error("Registration failed.", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg || "Registration failed.", { id: toastId });
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      contact: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="grid gap-6 px-8 py-6 bg-white rounded-xl shadow-lg">
      <div className="grid grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Enter your Full Name"
            className="focus:border-red-500 focus:ring-red-500"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your Email"
            className="focus:border-red-500 focus:ring-red-500"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Contact */}
        <div className="grid gap-2">
          <Label htmlFor="contact">Contact</Label>
          <Input
            id="contact"
            name="contact"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contact}
            placeholder="Enter your Contact Number"
            className="focus:border-red-500 focus:ring-red-500"
          />
          {formik.touched.contact && formik.errors.contact && (
            <p className="text-red-500 text-sm">{formik.errors.contact}</p>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-2 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your Password"
            className="focus:border-red-500 focus:ring-red-500 pr-10"
          />
          <Button
            type="button"
            className="absolute inset-y-0 top-7 right-3 text-gray-500"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </Button>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white cursor-pointer"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Creating account..." : "Register"}
      </Button>

      {/* Divider */}
      <div className="relative text-center text-sm text-muted-foreground">
        <div className="absolute inset-0 top-1/2 border-t border-gray-300"></div>
        <span className="relative bg-white px-3">Or continue with</span>
      </div>

      {/* Google Button */}
      <Button variant="outline" className="w-full border-red-500 text-red-700 hover:bg-red-50 cursor-pointer">
        Sign up with Google
      </Button>

      {/* Login Link */}
      <div className="text-center text-sm mt-2">
        Already have an account?{" "}
        <Link href="/login" className="underline text-red-600 hover:text-red-700 underline-offset-4">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
