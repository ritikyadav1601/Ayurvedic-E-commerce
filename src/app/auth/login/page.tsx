"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) return setError("Email and password are required");
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) return setError(res.error);
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-playfair text-[#C99A3D] mb-6">Welcome back</h1>
      {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-inter mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C99A3D]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
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
      <p className="mt-4 text-sm font-inter">
        New here? <Link className="text-[#C99A3D] hover:underline" href="/auth/signup">Create an account</Link>
      </p>
    </div>
  );
}


