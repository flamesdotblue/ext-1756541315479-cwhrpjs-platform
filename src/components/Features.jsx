import React from 'react';
import { ShieldCheck, Sparkles, Timer, Wallet } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Glittering design',
    desc: 'A mesmerizing glass-morphic card with subtle glow and motion that feels alive in your wallet.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-grade security',
    desc: 'Real-time fraud protection, biometric verification, and privacy-first virtual numbers.',
  },
  {
    icon: Timer,
    title: 'Instant approval',
    desc: 'Apply in minutes and start using your card online immediately with a single tap.',
  },
  {
    icon: Wallet,
    title: 'Smart rewards',
    desc: 'Auto-optimized cashback and insights that amplify your everyday spend.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for the digital age</h2>
        <p className="mt-3 text-white/80">
          Minimalist design meets maximal capability. Everything you need, nothing you don’t.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-2xl transition group-hover:scale-125" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-lg">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{desc}</p>
      </div>
    </div>
  );
}
