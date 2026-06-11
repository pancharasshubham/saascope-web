"use client";

import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/lib/auth";
import { saveToken } from "@/lib/storage";

import AuthLayout from "@/components/auth-layout";

import { getApiError } from "@/lib/error";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await login({
          email,
          password,
        });

      saveToken(
        response.token
      );

      router.push(
        "/dashboard"
      );

    } catch (error) {
        console.error(error);

      alert(
        getApiError(error)
      );

    } finally {

      setLoading(false);
    }
  }

 return (
  <div className="min-h-screen flex items-center justify-center">
    <AuthLayout
      title="Welcome Back"
      description="Sign in to access your SaaS audits."
    >
      {/* form */}
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold">
          Login
        </h1>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="border border-slate-300 rounded-md p-2"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="border border-slate-300 rounded-md p-2"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="bg-slate-900 text-white rounded-md p-2"
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>
      </form>
       <p
      className="
        text-center
        mt-6
        text-md
        text-slate-500
      "
    >   
        Don&apos;t have an account?

      <Link
        href="/register"
        className="
          ml-1
          text-slate-900
          font-medium
        "
      >
        Create Account
      </Link>
    </p>
    </AuthLayout>
    
  </div>
);
}