"use client";

import Link from "next/link";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  removeToken,
} from "@/lib/storage";

export default function Sidebar() {

  const pathname =
    usePathname();

  const router =
    useRouter();

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
      label: "Upload CSV",
    },
  ];

  function handleLogout() {

    removeToken();

    router.push(
      "/"
    );
  }

  return (
    <aside
      className="
        w-64
        min-h-screen
        border-r
        border-slate-200
        bg-white
        p-6
        flex
        flex-col
      "
    >

      <div className="mb-10">

        <h1
          className="
            text-2xl
            font-bold
            text-slate-900
          "
        >
          SaaScope
        </h1>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          SaaS Cost Auditor
        </p>

      </div>

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
                  ? `
                    rounded-lg
                    bg-slate-900
                    text-white
                    px-4
                    py-3
                    font-medium
                  `
                  : `
                    rounded-lg
                    px-4
                    py-3
                    text-slate-700
                    hover:bg-slate-100
                  `
              }
            >
              {link.label}
            </Link>

          )
        )}

      </nav>

      <div className="mt-auto pt-6">

  <div className="border-t border-slate-200 mb-4" />

  <div className="px-4 mb-4">

    <p
    className="
      text-xs   
      text-slate-500
    "
  >
    Workspace
  </p>

  <p
    className="
      text-sm
      font-medium
      text-slate-900
    "
  >
    SaaScope
  </p>

  </div>

  <button
    onClick={handleLogout}
    className="
      w-full
      text-left
      rounded-lg
      px-4
      py-3
      text-slate-700
      hover:bg-slate-100
      transition
    "
  >
    Sign Out
  </button>

</div>

    </aside>
  );
}