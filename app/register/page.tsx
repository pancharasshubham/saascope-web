"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import AuthLayout from "@/components/auth-layout";

import { register } from "@/lib/auth";

import {
getApiError,
} from "@/lib/error";

export default function RegisterPage() {

const router =
useRouter();

const [email, setEmail] =
useState("");

const [password, setPassword] =
useState("");

const [loading, setLoading] =
useState(false);

const [error, setError] =
useState("");

const [success, setSuccess] =
useState("");

async function handleSubmit(
e: React.FormEvent
) {

e.preventDefault();

setError("");

setSuccess("");

try {

  setLoading(true);

  await register({
    email,
    password,
  });

  setSuccess(
    "Account created successfully. Redirecting to login..."
  );

  setTimeout(() => {

    router.push(
      "/login"
    );

  }, 1200);

} catch (error) {

  console.error(error);

  setError(
    getApiError(error)
  );

} finally {

  setLoading(false);
}

}

return ( <AuthLayout
   title="Create Account"
   description="Start finding hidden SaaS costs and optimization opportunities."
 >

  <form
    onSubmit={handleSubmit}
    className="space-y-4"
  >

    <div>

      <label
        className="
          block
          text-sm
          font-medium
          mb-2
        "
      >
        Email
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
        className="
          w-full
          border
          border-slate-300
          rounded-lg
          px-4
          py-3
        "
        placeholder="john@example.com"
        required
      />

    </div>

    <div>

      <label
        className="
          block
          text-sm
          font-medium
          mb-2
        "
      >
        Password
      </label>

      <input
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
        className="
          w-full
          border
          border-slate-300
          rounded-lg
          px-4
          py-3
        "
        placeholder="••••••••"
        required
      />

    </div>

    {error && (

      <div
        className="
          rounded-lg
          border
          border-red-200
          bg-red-50
          text-red-700
          px-4
          py-3
          text-sm
        "
      >
        {error}
      </div>

    )}

    {success && (

      <div
        className="
          rounded-lg
          border
          border-green-200
          bg-green-50
          text-green-700
          px-4
          py-3
          text-sm
        "
      >
        {success}
      </div>

    )}

    <button
      type="submit"
      disabled={loading}
      className="
        w-full
        bg-slate-900
        text-white
        rounded-lg
        py-3
        font-medium
        hover:bg-slate-800
        disabled:opacity-60
      "
    >
      {
        loading
          ? "Creating Account..."
          : "Create Account"
      }
    </button>

    <p
      className="
        text-center
        text-sm
        text-slate-500
      "
    >

      Already have an account?

      <Link
        href="/login"
        className="
          ml-1
          font-medium
          text-slate-900
        "
      >
        Sign In
      </Link>

    </p>

  </form>

</AuthLayout>

);
}
