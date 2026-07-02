"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  }

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950 flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/">
            <Image
              src="/logo/logo1.png"
              alt="Sidibe Enterprises"
              width={362}
              height={271}
              className="h-32 w-auto object-contain"
            />
          </Link>
          <h1 className="text-3xl font-extrabold mt-4">Welcome back</h1>
          <p className="text-slate-600 mt-2">Sign in to access your program intelligence dashboard.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 space-y-5"
        >
          <div>
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <div className="relative mt-2">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <div className="relative mt-2">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white px-7 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Signing in..." : "Sign In"} <ArrowRight size={18} />
          </button>

          <p className="text-xs text-center text-slate-500">
            Demo mode — any email and password will sign you in.
          </p>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          <Link href="/" className="font-semibold text-blue-600">
            &larr; Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
