"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import AuthLayout from "@/components/auth-layout";

import { register } from "@/lib/auth";

export default function RegisterPage() {

  const router =
    useRouter();

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

        await register({
          email,
          password,
        });

      alert(
        "Account created successfully. Please login."
      );    

      router.push(
        "/login"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Registration failed"
      );

    } finally {

      setLoading(false);
    }
  }

  return (
    <AuthLayout
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