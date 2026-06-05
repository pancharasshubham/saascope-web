"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/lib/auth";
import { saveToken } from "@/lib/storage";

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

    } catch {

      alert(
        "Login failed"
      );

    } finally {

      setLoading(false);
    }
  }

 return (
  <div className="min-h-screen flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-4"
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
  </div>
);
}