"use client";
import React, { useEffect, useMemo, useState } from "react";
import { api } from "@/lib/api";

type Product = {
  _id: string;
  name: string;
  description?: string;
  fullDescription?: string;
  images: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  stock?: number;
  category?: { _id: string; name: string } | string | null;
  isActive: boolean;
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    return params.toString();
  }, [search]);

  const load = () => {
    setLoading(true);
    api
      .listAdminProducts(query)
      .then((res: any) => setProducts(res.products || []))
      .catch((e) => setError(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, [query]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="border rounded px-3 py-2 w-full sm:max-w-sm"
        />
        <AddProductButton onAdded={load} />
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
                <th className="text-left p-2 border text-sm hidden sm:table-cell">Price</th>
                <th className="text-left p-2 border text-sm hidden md:table-cell">Stock</th>
                <th className="text-left p-2 border text-sm">Status</th>
                <th className="text-left p-2 border text-sm hidden lg:table-cell">Category</th>
                <th className="text-left p-2 border text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-t">
                  <td className="p-2 border">
                    <div className="font-medium text-sm">{p.name}</div>
                    <div className="text-xs text-gray-500 sm:hidden">₹{p.price}</div>
                    <div className="text-xs text-gray-500 md:hidden">{p.stock ?? (p.inStock ? "In stock" : "Out")}</div>
                    <div className="text-xs text-gray-500 lg:hidden">{typeof p.category === "object" && p.category ? p.category.name : "-"}</div>
                  </td>
                  <td className="p-2 border hidden sm:table-cell text-sm">₹{p.price}</td>
                  <td className="p-2 border hidden md:table-cell text-sm">{p.stock ?? (p.inStock ? "In stock" : "Out")}</td>
                  <td className="p-2 border">
                    <button
                      className={`px-2 py-1 rounded text-xs ${p.isActive ? "bg-green-100" : "bg-gray-200"}`}
                      onClick={async () => {
                        await api.setProductStatus(p._id, !p.isActive);
                        load();
                      }}
                    >
                      {p.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="p-2 border hidden lg:table-cell text-sm">{typeof p.category === "object" && p.category ? p.category.name : "-"}</td>
                  <td className="p-2 border">
                    <div className="flex flex-col sm:flex-row gap-1">
                      <EditProductButton product={p} onSaved={load} />
                      <button
                        className="px-2 py-1 bg-red-600 text-white rounded text-xs"
                        onClick={async () => {
                          if (!confirm("Delete product?")) return;
                          await api.deleteProduct(p._id);
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

function AddProductButton({ onAdded }: { onAdded: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="px-3 py-2 bg-black text-white rounded" onClick={() => setOpen(true)}>
        Add Product
      </button>
      {open && <ProductForm onClose={() => setOpen(false)} onSubmitSuccess={onAdded} />}
    </>
  );
}

function EditProductButton({ product, onSaved }: { product: Product; onSaved: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="px-2 py-1 border rounded text-xs" onClick={() => setOpen(true)}>
        Edit
      </button>
      {open && <ProductForm initial={product} onClose={() => setOpen(false)} onSubmitSuccess={onSaved} />}
    </>
  );
}

function ProductForm({ initial, onClose, onSubmitSuccess }: { initial?: Partial<Product>; onClose: () => void; onSubmitSuccess: () => void }) {
  const [name, setName] = useState(initial?.name || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [fullDescription, setFullDescription] = useState((initial as any)?.fullDescription || "");
  const [imagesInput, setImagesInput] = useState((initial?.images || []).join(", "));
  const [price, setPrice] = useState<number>(initial?.price || 0);
  const [originalPrice, setOriginalPrice] = useState<number>((initial as any)?.originalPrice ?? 0);
  const [discount, setDiscount] = useState<number>((initial as any)?.discount ?? 0);
  const [rating, setRating] = useState<number>((initial as any)?.rating ?? 0);
  const [reviews, setReviews] = useState<number>((initial as any)?.reviews ?? 0);
  const [inStock, setInStock] = useState<boolean>((initial as any)?.inStock ?? true);
  const [stock, setStock] = useState<number>(initial?.stock ?? 0);
  const [categoryId, setCategoryId] = useState<string>(
    typeof initial?.category === "object" && initial?.category ? (initial?.category as any)._id : ""
  );
  const [categories, setCategories] = useState<Array<{ _id: string; name: string }>>([]);
  const [ingredientsInput, setIngredientsInput] = useState(((initial as any)?.ingredients || []).join(", "));
  const [benefitsInput, setBenefitsInput] = useState(((initial as any)?.benefits || []).join(", "));
  const [howToUseInput, setHowToUseInput] = useState(((initial as any)?.howToUse || []).join("\n"));
  const [specsInput, setSpecsInput] = useState(() => {
    const specs = (initial as any)?.specifications || {};
    return Object.keys(specs).map((k: string) => `${k}: ${specs[k]}`).join("\n");
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .listCategories()
      .then((res: any) => setCategories(res))
      .catch(() => {});
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const images = imagesInput
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean);
      const ingredients = ingredientsInput
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean);
      const benefits = benefitsInput
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean);
      const howToUse = howToUseInput
        .split("\n")
        .map((s: string) => s.trim())
        .filter(Boolean);
      const specifications: Record<string, string> = {};
      specsInput
        .split("\n")
        .map((line: string) => line.trim())
        .filter(Boolean)
        .forEach((line: string) => {
          const idx = line.indexOf(":");
          if (idx > -1) {
            const key = line.slice(0, idx).trim();
            const value = line.slice(idx + 1).trim();
            if (key) specifications[key] = value;
          }
        });

      const payload: any = {
        name,
        description,
        fullDescription,
        images,
        price: Number(price),
        originalPrice: Number(originalPrice) || undefined,
        discount: Number(discount) || undefined,
        rating: Number(rating) || undefined,
        reviews: Number(reviews) || undefined,
        inStock: Boolean(inStock),
        stock: Number(stock) || 0,
        ingredients,
        benefits,
        howToUse,
        specifications,
      };
      if (categoryId) payload.category = categoryId;
      if (initial?._id) await api.updateProduct(initial._id, payload);
      else await api.createProduct(payload);
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
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <form onSubmit={onSubmit} className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">{initial?._id ? "Edit" : "Add"} Product</h3>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2 w-full" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <select className="border rounded px-3 py-2 w-full" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              <option value="">Select category (optional)</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>
          
          <textarea className="border rounded px-3 py-2 w-full" placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <textarea className="border rounded px-3 py-2 w-full" placeholder="Full Description" value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} />
          <input className="border rounded px-3 py-2 w-full" placeholder="Image URLs (comma separated)" value={imagesInput} onChange={(e) => setImagesInput(e.target.value)} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <input className="border rounded px-3 py-2 w-full" placeholder="Price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
            <input className="border rounded px-3 py-2 w-full" placeholder="Original Price" type="number" value={originalPrice} onChange={(e) => setOriginalPrice(Number(e.target.value))} />
            <input className="border rounded px-3 py-2 w-full" placeholder="Discount (%)" type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
            <input className="border rounded px-3 py-2 w-full" placeholder="Stock" type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} />
            <input className="border rounded px-3 py-2 w-full" placeholder="Rating (0-5)" type="number" step="0.1" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
            <input className="border rounded px-3 py-2 w-full" placeholder="Reviews Count" type="number" value={reviews} onChange={(e) => setReviews(Number(e.target.value))} />
          </div>
          
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} /> In Stock
          </label>
          
          <input className="border rounded px-3 py-2 w-full" placeholder="Ingredients (comma separated)" value={ingredientsInput} onChange={(e) => setIngredientsInput(e.target.value)} />
          <input className="border rounded px-3 py-2 w-full" placeholder="Benefits (comma separated)" value={benefitsInput} onChange={(e) => setBenefitsInput(e.target.value)} />
          <textarea className="border rounded px-3 py-2 w-full" placeholder="How To Use (one step per line)" value={howToUseInput} onChange={(e) => setHowToUseInput(e.target.value)} />
          <textarea className="border rounded px-3 py-2 w-full" placeholder="Specifications (key: value per line)" value={specsInput} onChange={(e) => setSpecsInput(e.target.value)} />
          
          <div className="flex flex-col sm:flex-row gap-2 justify-end pt-4">
            <button type="button" className="px-4 py-2 border rounded" onClick={onClose} disabled={loading}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded" disabled={loading}>{loading ? "Saving..." : "Save"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}


