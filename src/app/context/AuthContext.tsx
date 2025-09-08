"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SessionUser = {
  name: string;
  email: string;
};

type StoredUser = SessionUser & {
  passwordHash: string;
};

type AuthContextValue = {
  user: SessionUser | null;
  isAuthenticated: boolean;
  signup: (name: string, email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  login: (email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function hashPassword(plain: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("ae_users");
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("ae_users", JSON.stringify(users));
}

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
    const users = readUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) return { ok: false as const, error: "Email already in use" };
    const passwordHash = await hashPassword(password);
    const newUser: StoredUser = { name, email, passwordHash };
    const updated = [...users, newUser];
    writeUsers(updated);
    const sessionUser: SessionUser = { name, email };
    writeSession(sessionUser);
    setUser(sessionUser);
    return { ok: true as const };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const users = readUsers();
    const passwordHash = await hashPassword(password);
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === passwordHash);
    if (!found) return { ok: false as const, error: "Invalid credentials" };
    const sessionUser: SessionUser = { name: found.name, email: found.email };
    writeSession(sessionUser);
    setUser(sessionUser);
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
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


