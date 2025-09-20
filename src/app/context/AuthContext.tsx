"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api, setToken } from "@/lib/api";

type SessionUser = {
  name: string;
  email: string;
  role?: string;
};

type AuthContextValue = {
  user: SessionUser | null;
  isAuthenticated: boolean;
  signup: (name: string, email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  login: (email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readSession(): SessionUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("ae_session");
    return raw ? (JSON.parse(raw) as SessionUser) : null;
  } catch {
    return null;
  }
}

function writeSession(user: SessionUser | null) {
  if (typeof window === "undefined") return;
  if (user) localStorage.setItem("ae_session", JSON.stringify(user));
  else localStorage.removeItem("ae_session");
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    setUser(readSession());
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    try {
      const res = await api.register({ name, email, password });
      setToken(res.token);
      const sessionUser: SessionUser = { name: res.user.name, email: res.user.email, role: res.user.role };
      writeSession(sessionUser);
      setUser(sessionUser);
      return { ok: true as const };
    } catch (e: any) {
      return { ok: false as const, error: e.message || "Signup failed" };
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await api.login({ email, password });
      setToken(res.token);
      const sessionUser: SessionUser = { name: res.user.name, email: res.user.email, role: res.user.role };
      writeSession(sessionUser);
      setUser(sessionUser);
      return { ok: true as const };
    } catch (e: any) {
      return { ok: false as const, error: e.message || "Login failed" };
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    writeSession(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
  }), [user, signup, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


