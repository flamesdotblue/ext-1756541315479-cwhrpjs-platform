import React from 'react';
import { CreditCard, Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold tracking-tight">GlitterCard</span>
            </div>
            <nav className="hidden items-center gap-6 sm:flex">
              <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
                <Rocket className="h-4 w-4" /> Get Started
              </a>
            </nav>
            <button className="sm:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
