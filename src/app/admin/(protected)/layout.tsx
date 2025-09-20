"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/admin");
    else if (user?.role !== "admin") router.replace("/");
  }, [isAuthenticated, user, router]);

  const linkClass = (href: string) =>
    `px-3 py-2 rounded ${pathname === href ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`;

  if (!isAuthenticated || user?.role !== "admin") return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Admin Dashboard</h1>
        <nav className="flex flex-wrap gap-2">
          <Link className={linkClass("/admin/dashboard")} href="/admin/dashboard">Overview</Link>
          <Link className={linkClass("/admin/products")} href="/admin/products">Products</Link>
          <Link className={linkClass("/admin/categories")} href="/admin/categories">Categories</Link>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}


