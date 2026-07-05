import React, { useState } from "react";
import {
  Activity, Building2, Users, Calendar, UserCog, CreditCard, TrendingUp,
  ShieldCheck, CheckCircle2, ArrowRight, Menu, X, Shield, ChevronRight,
} from "lucide-react";
import { C } from "../styles/tokens";
import PulseLine from "../components/ui/PulseLine";

const features = [
  { icon: Users, title: "Unified patient records", body: "One chart per patient, visible across every location they visit in your network — no faxing files between sites." },
  { icon: Calendar, title: "Scheduling & bed management", body: "Book appointments, allocate beds, and see load across departments in real time." },
  { icon: UserCog, title: "Role-based staff access", body: "Doctors, nurses, front-desk and billing each see exactly what their role needs, nothing more." },
  { icon: CreditCard, title: "Consolidated billing", body: "Insurance claims and self-pay invoices, reconciled across all your facilities in one ledger." },
  { icon: TrendingUp, title: "Network-wide analytics", body: "Compare occupancy, revenue and staffing load across every hospital you run, side by side." },
  { icon: ShieldCheck, title: "Compliance-ready audit trails", body: "Every record access and edit is logged, timestamped, and exportable for review." },
];

const tiers = [
  { name: "Single Clinic", price: "$149", period: "/month", desc: "For one location getting off spreadsheets.", features: ["Up to 15 staff accounts", "Patient records & scheduling", "Basic billing", "Email support"], cta: "Start free trial" },
  { name: "Hospital Network", price: "$549", period: "/month", desc: "For groups running multiple facilities.", features: ["Unlimited staff accounts", "Cross-location records", "Consolidated billing & claims", "Network analytics", "Priority support"], cta: "Start free trial", featured: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For large or regulated health systems.", features: ["Dedicated tenant infrastructure", "Custom compliance workflows", "SSO & SCIM", "Uptime SLA + account manager"], cta: "Talk to sales" },
];

export default function Landing({ goto }) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: C.mist, color: C.slate }}>
      <header className="sticky top-0 z-30 backdrop-blur border-b" style={{ backgroundColor: "rgba(245,247,245,0.9)", borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: C.ink }}>
              <Activity size={17} color="white" />
            </div>
            <span className="font-display text-lg tracking-tight" style={{ color: C.ink }}>Vitalis</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: C.slateSoft }}>
            <a href="#features" className="hover:opacity-70">Product</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#security" className="hover:opacity-70">Security</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => goto("tenant")} className="text-sm font-medium px-4 py-2 rounded-lg transition hover:opacity-80" style={{ color: C.ink }}>
              Hospital sign in
            </button>
            <button onClick={() => goto("tenant")} className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition hover:opacity-90" style={{ backgroundColor: C.teal }}>
              Get started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileNav && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium" style={{ color: C.slateSoft }}>
            <a href="#features">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <button onClick={() => goto("tenant")} className="text-left font-semibold" style={{ color: C.teal }}>Hospital sign in →</button>
          </div>
        )}
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8" style={{ backgroundColor: C.tealSoft, color: C.teal }}>
          <Building2 size={13} /> Built for hospital groups, not single storefronts
        </div>
        <h1 className="font-display leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: C.ink }}>
          One system. Every hospital<br className="hidden md:block" /> in your network.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-base md:text-lg" style={{ color: C.slateSoft }}>
          Scheduling, records, billing and staff access for every location you run —
          with a single control tower for the whole organization.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => goto("tenant")} className="px-6 py-3 rounded-lg text-white font-semibold text-sm inline-flex items-center gap-2 transition hover:opacity-90" style={{ backgroundColor: C.ink }}>
            Start free trial <ArrowRight size={16} />
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold text-sm border transition hover:bg-white" style={{ borderColor: C.line, color: C.ink }}>
            Book a demo
          </button>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <PulseLine stroke={C.teal} animated height={70} />
          <p className="text-xs uppercase tracking-widest mt-2" style={{ color: C.slateSoft }}>Live across every tenant, every hour of every day</p>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["46", "hospital groups onboard"],
            ["2.1M", "patient records managed"],
            ["99.98%", "platform uptime"],
            ["11", "countries"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl" style={{ color: C.ink }}>{n}</div>
              <div className="text-xs mt-1" style={{ color: C.slateSoft }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-lg mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.teal }}>What's inside</span>
          <h2 className="font-display text-3xl mt-3" style={{ color: C.ink }}>Everything a multi-location hospital needs to run as one</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border" style={{ backgroundColor: C.paper, borderColor: C.line }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: C.tealSoft }}>
                <f.icon size={18} color={C.teal} />
              </div>
              <h3 className="font-semibold text-base mb-1.5" style={{ color: C.ink }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.slateSoft }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-lg mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.teal }}>Pricing</span>
          <h2 className="font-display text-3xl mt-3" style={{ color: C.ink }}>Priced by how many doors you run</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-8 border flex flex-col h-full"
              style={{
                backgroundColor: t.featured ? C.ink : C.paper,
                borderColor: t.featured ? C.ink : C.line,
                color: t.featured ? "white" : C.slate,
              }}
            >
              <h3 className="font-semibold text-sm uppercase tracking-wide" style={{ color: t.featured ? C.amber : C.teal }}>{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl">{t.price}</span>
                <span className="text-sm" style={{ color: t.featured ? "#B9CFCB" : C.slateSoft }}>{t.period}</span>
              </div>
              <p className="text-sm mt-3" style={{ color: t.featured ? "#B9CFCB" : C.slateSoft }}>{t.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((ft) => (
                  <li key={ft} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" color={t.featured ? C.amber : C.teal} />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => goto("tenant")}
                className="mt-8 w-full py-2.5 rounded-lg text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: t.featured ? "white" : C.ink, color: t.featured ? C.ink : "white" }}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="security" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl p-10 grid md:grid-cols-2 gap-8 items-center" style={{ backgroundColor: C.tealSoft }}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.teal }}>Security & governance</span>
            <h2 className="font-display text-2xl mt-3" style={{ color: C.ink }}>Every tenant is isolated. Every action is logged.</h2>
            <p className="text-sm mt-3" style={{ color: C.slateSoft }}>Data for each hospital is kept separate at the tenant level, with role-based access and a full audit trail for every record touched.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Tenant data isolation", "Role-based access", "Full audit logs", "Encrypted at rest"].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white" style={{ color: C.ink }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink, color: "#B9CFCB" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity size={16} color="white" />
              <span className="font-display text-white">Vitalis</span>
            </div>
            <p className="text-xs">Hospital management, built for networks.</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Product</h4>
            <ul className="text-xs space-y-2"><li>Features</li><li>Pricing</li><li>Security</li></ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
            <ul className="text-xs space-y-2"><li>About</li><li>Careers</li><li>Contact</li></ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Operations</h4>
            <button onClick={() => goto("super")} className="text-xs inline-flex items-center gap-1.5 hover:text-white">
              <Shield size={12} /> Platform admin portal <ChevronRight size={12} />
            </button>
          </div>
        </div>
        <div className="border-t px-6 py-5 text-center text-xs" style={{ borderColor: "#1E5654" }}>
          © 2026 Vitalis Health Systems. This is a product demo.
        </div>
      </footer>
    </div>
  );
}
