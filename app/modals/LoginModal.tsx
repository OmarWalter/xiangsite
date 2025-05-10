"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { login } from "@/app/actions/auth";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })
    ),
  });

  if (!isOpen) return null;

const onSubmit = async ({ email, password }: LoginForm) => {
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
    formData.append("email", email);
    formData.append("password", password);
    const result = await login(formData);
    if (result?.error) {
      alert(result.error);
      return;
    }
    // Server action handles redirect to /about, fallback to client-side
    const returnUrl = searchParams?.get("returnUrl");
    if (returnUrl) {
      console.log(`Using returnUrl: ${returnUrl}`);
      router.push(returnUrl);
    } else {
      console.log("Login successful, expecting server-side redirect to /about");
      router.push("/about");
    }
  } catch (error: unknown) {
    // Ignore NEXT_REDIRECT errors, as they indicate a successful redirect
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      console.log("Caught NEXT_REDIRECT, server-side redirect to /about triggered");
      return;
    }
    console.error("Login error:", error);
    const message =
      error instanceof Error ? error.message : "Login failed";
    alert(message);
  }
};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 id="login-modal-title" className="text-2xl font-semibold text-gray-900">
            Log In
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close login modal"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              Log In
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Cancel login"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}