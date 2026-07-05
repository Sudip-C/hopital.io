import React from "react";
import { Bell, ChevronRight, LogOut } from "lucide-react";
import { C } from "../../styles/tokens";

/**
 * Shared shell for both dashboards. `dark` flips it into the inverted
 * "platform" theme used by Super Admin, so the two areas are visually
 * unmistakable from one another.
 */
export default function Shell({ dark, brand, brandIcon: BrandIcon, navItems, active, setActive, onExit, topRight, children }) {
  return (
    <div className="min-h-screen flex font-body" style={{ backgroundColor: dark ? "#0B2C2D" : C.mist, color: dark ? "#E7EFED" : C.slate }}>
      {/* SIDEBAR */}
      <aside className="w-60 shrink-0 flex flex-col border-r" style={{ backgroundColor: dark ? C.ink : C.paper, borderColor: dark ? "#1E5654" : C.line }}>
        <div className="h-16 flex items-center gap-2.5 px-5 border-b" style={{ borderColor: dark ? "#1E5654" : C.line }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: dark ? C.amber : C.ink }}>
            <BrandIcon size={16} color={dark ? C.ink : "white"} />
          </div>
          <div>
            <div className="font-display text-sm leading-none" style={{ color: dark ? "white" : C.ink }}>{brand}</div>
            <div className="text-[10px] mt-0.5" style={{ color: dark ? "#8FB3AE" : C.slateSoft }}>
              {dark ? "Platform control" : "Tenant workspace"}
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition"
                style={{
                  backgroundColor: isActive ? (dark ? "#154C4A" : C.tealSoft) : "transparent",
                  color: isActive ? (dark ? C.amber : C.teal) : (dark ? "#B9CFCB" : C.slateSoft),
                }}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t" style={{ borderColor: dark ? "#1E5654" : C.line }}>
          <button
            onClick={onExit}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition hover:opacity-80"
            style={{ color: dark ? "#B9CFCB" : C.slateSoft }}
          >
            <LogOut size={16} /> Exit to site
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-8 border-b" style={{ backgroundColor: dark ? "#0F3D3E" : C.paper, borderColor: dark ? "#1E5654" : C.line }}>
          <div className="flex items-center gap-2 text-sm" style={{ color: dark ? "#8FB3AE" : C.slateSoft }}>
            <span>{dark ? "Platform" : "Riverside General Hospital"}</span>
            <ChevronRight size={14} />
            <span className="font-semibold" style={{ color: dark ? "white" : C.ink }}>
              {navItems.find((n) => n.key === active)?.label}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {topRight}
            <Bell size={17} style={{ color: dark ? "#B9CFCB" : C.slateSoft }} />
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: dark ? C.amber : C.tealSoft, color: dark ? C.ink : C.teal }}
            >
              {dark ? "SA" : "RH"}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
