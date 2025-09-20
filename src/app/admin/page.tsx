"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function AdminLoginPage() {
  const { login, isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user?.role === "admin") router.replace("/admin/dashboard");
  }, [isAuthenticated, user, router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) return setError("Email and password are required");
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) return setError(res.error);
    // Redirect will be handled by the effect once role is admin
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-playfair text-[#C99A3D] mb-6 text-center">Admin Login</h1>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-inter mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C99A3D]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-inter mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C99A3D]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C99A3D] text-white py-2 rounded-md font-inter hover:bg-[#A87B2F] transition-colors"
          >
            {loading ? "Signing in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}


