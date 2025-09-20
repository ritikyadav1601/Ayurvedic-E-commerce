"use client";
import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function AdminOverviewPage() {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getAdminOverview()
      .then((res) => setData(res))
      .catch((e) => setError(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  const overview = data?.overview || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard title="Users" value={overview.totalUsers} />
      <StatCard title="Products" value={overview.totalProducts} />
      <StatCard title="Categories" value={overview.totalCategories} />
      <StatCard title="Orders" value={overview.totalOrders} />
      <StatCard title="Revenue" value={`₹${overview.totalRevenue?.toFixed?.(2) || 0}`} />
      <StatCard title="Avg Order" value={`₹${overview.avgOrderValue?.toFixed?.(2) || 0}`} />
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div className="border rounded p-4 bg-white">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}


