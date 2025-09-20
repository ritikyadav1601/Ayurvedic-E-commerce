"use client";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const TOKEN_KEY = "ae_jwt";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  if (typeof window === "undefined") return;
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(path: string, method: HttpMethod = "GET", body?: unknown): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const token = getToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      if (data?.message) message = data.message;
    } catch {}
    throw new Error(message);
  }
  return res.json() as Promise<T>;
}

export const api = {
  // Auth
  register: (payload: { name: string; email: string; password: string }) => request<{ token: string; user: any }>(`/auth/register`, "POST", payload),
  login: (payload: { email: string; password: string }) => request<{ token: string; user: any }>(`/auth/login`, "POST", payload),

  // Admin dashboard
  getAdminOverview: () => request(`/admin/dashboard`),

  // Products
  listAdminProducts: (query: string = "") => request(`/admin/products${query ? `?${query}` : ""}`),
  createProduct: (payload: unknown) => request(`/products`, "POST", payload),
  updateProduct: (id: string, payload: unknown) => request(`/products/${id}`, "PUT", payload),
  deleteProduct: (id: string) => request(`/products/${id}`, "DELETE"),
  setProductStock: (id: string, stock: number) => request(`/admin/products/${id}/stock`, "PUT", { stock }),
  setProductStatus: (id: string, isActive: boolean) => request(`/admin/products/${id}/status`, "PUT", { isActive }),

  // Categories
  listCategories: () => request(`/admin/categories`),
  createCategory: (payload: { name: string; description?: string }) => request(`/admin/categories`, "POST", payload),
  updateCategory: (id: string, payload: { name?: string; description?: string }) => request(`/admin/categories/${id}`, "PUT", payload),
  deleteCategory: (id: string) => request(`/admin/categories/${id}`, "DELETE"),
};


