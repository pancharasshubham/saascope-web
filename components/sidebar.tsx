"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import { useRouter } from "next/navigation";

import {
  removeToken,
} from "@/lib/storage";

export default function Sidebar() {

  const pathname =
    usePathname();

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/reports",
      label: "Reports",
    },
    {
      href: "/upload",
      label: "Upload",
    },
  ];

  const router =
    useRouter();

    function handleLogout() {

        removeToken();

        router.push(
            "/login"
        );
    }

    <button
        onClick={handleLogout}
        className="
            mt-auto
            rounded-md
            bg-red-600
            text-white
            px-3
            py-2
        "
    >
        Logout
    </button>

  return (
    <aside
      className="
        w-64
        min-h-screen
        border-r
        border-slate-200
        bg-white
        p-6
      "
    >
      <h1
        className="
          text-2xl
          font-bold
          mb-8
        "
      >
        SaaScope
      </h1>

      <nav
        className="
          flex
          flex-col
          gap-2
        "
      >
        {links.map(
          (link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname ===
                link.href
                  ? "rounded-md bg-slate-900 text-white px-3 py-2"
                  : "rounded-md px-3 py-2 hover:bg-slate-100"
              }
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
  
}