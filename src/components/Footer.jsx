import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-900">GlassCard Inc.</p>
            <p className="text-sm text-zinc-500">Minimal payments for modern life.</p>
          </div>
          <nav className="flex gap-5 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#faq" className="hover:text-zinc-900">FAQ</a>
            <a href="#" className="hover:text-zinc-900">Privacy</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} GlassCard Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
