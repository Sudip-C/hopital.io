import React, { useState } from "react";
import Landing from "./pages/Landing";
import TenantAdminApp from "./pages/tenant/TenantAdminApp";
import SuperAdminApp from "./pages/super/SuperAdminApp";

export default function App() {
  const [screen, setScreen] = useState("landing"); // "landing" | "tenant" | "super"

  if (screen === "tenant") return <TenantAdminApp onExit={() => setScreen("landing")} />;
  if (screen === "super") return <SuperAdminApp onExit={() => setScreen("landing")} />;
  return <Landing goto={setScreen} />;
}
