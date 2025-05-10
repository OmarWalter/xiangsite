"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { hash, compare } from "bcryptjs";

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

    // Placeholder: Check if user exists
    // const existingUser = await db.user.findUnique({ where: { email } });
    // if (existingUser) {
    //   return { error: "User with this email already exists" };
    // }

    // const hashedPassword = await hash(password, 10);

    // Placeholder: Create user
    // await db.user.create({
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     password: hashedPassword,
    //   },
    // });

    console.log(`User ${email} signed up successfully`);

    redirect("/about");
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

    // Placeholder: Fetch user from database
    // const user = await db.user.findUnique({ where: { email } });
    // if (!user) {
    //   return { error: "Invalid email or password" };
    // }

    // Placeholder: Replace with actual user data
    const user = {
      email,
      password: await hash("testpassword", 10), // Mock hashed password
    };

    // Verify password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid email or password" };
    }

    // Placeholder: Set up session or authentication
    // await setSession({ userId: user.id, email: user.email });

    console.log(`User ${email} logged in successfully`);

    redirect("/about");
  } catch (error) {
    console.error("Login error:", error);
    return {
      error: "An unexpected error occurred during login",
    };
  }
}