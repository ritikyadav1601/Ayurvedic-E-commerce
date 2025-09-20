"use client";
import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";

type Category = { _id: string; name: string; description?: string };

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    api
      .listCategories()
      .then((res: any) => setCategories(res))
      .catch((e) => setError(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <AddCategoryButton onAdded={load} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2 border text-sm">Name</th>
                <th className="text-left p-2 border text-sm hidden sm:table-cell">Description</th>
                <th className="text-left p-2 border text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c._id} className="border-t">
                  <td className="p-2 border">
                    <div className="font-medium text-sm">{c.name}</div>
                    <div className="text-xs text-gray-500 sm:hidden">{c.description || "-"}</div>
                  </td>
                  <td className="p-2 border hidden sm:table-cell text-sm">{c.description || "-"}</td>
                  <td className="p-2 border">
                    <div className="flex flex-col sm:flex-row gap-1">
                      <EditCategoryButton category={c} onSaved={load} />
                      <button
                        className="px-2 py-1 bg-red-600 text-white rounded text-xs"
                        onClick={async () => {
                          if (!confirm("Delete category?")) return;
                          await api.deleteCategory(c._id);
                          load();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function AddCategoryButton({ onAdded }: { onAdded: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="px-3 py-2 bg-black text-white rounded" onClick={() => setOpen(true)}>
        Add Category
      </button>
      {open && <CategoryForm onClose={() => setOpen(false)} onSubmitSuccess={onAdded} />}
    </>
  );
}

function EditCategoryButton({ category, onSaved }: { category: Category; onSaved: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="px-2 py-1 border rounded text-xs" onClick={() => setOpen(true)}>
        Edit
      </button>
      {open && <CategoryForm initial={category} onClose={() => setOpen(false)} onSubmitSuccess={onSaved} />}
    </>
  );
}

function CategoryForm({ initial, onClose, onSubmitSuccess }: { initial?: Partial<Category>; onClose: () => void; onSubmitSuccess: () => void }) {
  const [name, setName] = useState(initial?.name || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (initial?._id) await api.updateCategory(initial._id, { name, description });
      else await api.createCategory({ name, description });
      onSubmitSuccess();
      onClose();
    } catch (e: any) {
      setError(e.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <form onSubmit={onSubmit} className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">{initial?._id ? "Edit" : "Add"} Category</h3>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <input className="border rounded px-3 py-2 w-full" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <textarea className="border rounded px-3 py-2 w-full" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="flex flex-col sm:flex-row gap-2 justify-end pt-4">
            <button type="button" className="px-4 py-2 border rounded" onClick={onClose} disabled={loading}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded" disabled={loading}>{loading ? "Saving..." : "Save"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
