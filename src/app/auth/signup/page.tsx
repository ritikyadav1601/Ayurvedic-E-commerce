"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !password) return setError("All fields are required");
    if (password.length < 6) return setError("Password must be at least 6 characters");
    if (password !== confirm) return setError("Passwords do not match");
    setLoading(true);
    const res = await signup(name, email, password);
    setLoading(false);
    if (!res.ok) return setError(res.error);
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-playfair text-[#C99A3D] mb-6">Create an account</h1>
      {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-inter mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C99A3D]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
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
            placeholder="Enter a strong password"
          />
        </div>
        <div>
          <label className="block text-sm font-inter mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#C99A3D]"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter your password"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#C99A3D] text-white py-2 rounded-md font-inter hover:bg-[#A87B2F] transition-colors"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-sm font-inter">
        Already have an account? <Link className="text-[#C99A3D] hover:underline" href="/auth/login">Log in</Link>
      </p>
    </div>
  );
}


