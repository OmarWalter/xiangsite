"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { signup } from "@/app/actions/auth";

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpForm>({
    resolver: yupResolver(
      Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters"),
      })
    ),
  });

  if (!isOpen) return null;

  const onSubmit = async ({ firstName, lastName, email, password }: SignUpForm) => {
    try {
      // Check for client-side validation errors
      if (Object.keys(errors).length > 0) {
        const errorMessages = Object.values(errors)
          .map((error) => error.message)
          .filter((msg): msg is string => !!msg)
          .join("\n");
        alert(errorMessages || "Please fix the form errors");
        return;
      }

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      const result = await signup(formData);
      if (result?.error) {
        alert(result.error);
        return;
      }
      // Server action should redirect to /about, fallback to client-side if needed
      console.log("Signup successful, expecting server-side redirect to /about");
      router.push("/about");
    } catch (error: any) {
      // Ignore NEXT_REDIRECT errors, as they indicate a successful redirect
      if (error.message === "NEXT_REDIRECT") {
        console.log("Caught NEXT_REDIRECT, server-side redirect to /about triggered");
        return;
      }
      console.error("Signup error:", error);
      const message = error.message || "Registration failed";
      alert(message);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-modal-title"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 id="signup-modal-title" className="text-2xl font-semibold text-gray-900">
            Sign Up
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close signup modal"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
            >
              {isSubmitting && <span className="inline-block animate-spin mr-2">⏳</span>}
              Register
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Cancel signup"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}