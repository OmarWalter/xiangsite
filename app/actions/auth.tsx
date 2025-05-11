"use server";

import { z } from "zod";
// import { redirect } from "next/navigation";
// import { hash } from "bcryptjs";
import { cookies } from "next/headers";

const signupSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export async function signup(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const parsedData = signupSchema.safeParse({ firstName, lastName, email, password });
    if (!parsedData.success) {
      return {
        error: parsedData.error.errors[0].message,
      };
    }

    // Placeholder: Create user (if you integrate a database later)
    // await db.user.create({
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     password: hashedPassword,
    //   },
    // });

    console.log(`User ${email} signed up successfully`);

    // Set session token for middleware
    const cookieStore = await cookies();
    cookieStore.set("sessionToken", email, { httpOnly: true, secure: true });

  } catch (error) {
    console.error("Signup error:", error);
    return {
      error: "An unexpected error occurred during signup",
    };
  }
}

export async function login(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const parsedData = loginSchema.safeParse({ email, password });
    if (!parsedData.success) {
      return {
        error: parsedData.error.errors[0].message,
      };
    }

    console.log(`User ${email} logged in successfully`);

    // Set session token for middleware
    const cookieStore = await cookies();
    cookieStore.set("sessionToken", email, { httpOnly: true, secure: true });

  } catch (error) {
    console.error("Login error:", error);
    return {
      error: "An unexpected error occurred during login",
    };
  }
}