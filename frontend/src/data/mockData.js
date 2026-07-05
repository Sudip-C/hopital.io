// All mock data lives here. Swap any of these for a real API call
// (e.g. useEffect + fetch, or React Query) without touching the UI.

export const visitTrend = [
  { d: "Mon", v: 62 }, { d: "Tue", v: 78 }, { d: "Wed", v: 71 }, { d: "Thu", v: 88 },
  { d: "Fri", v: 95 }, { d: "Sat", v: 54 }, { d: "Sun", v: 41 },
];

export const deptLoad = [
  { d: "ER", v: 42 }, { d: "Cardio", v: 28 }, { d: "Peds", v: 19 }, { d: "Ortho", v: 24 }, { d: "Radiology", v: 15 },
];

export const patients = [
  { id: "P-10231", name: "Ananya Sharma", age: "34 / F", doctor: "Dr. Rao", visit: "Jul 3, 2026", status: "Active" },
  { id: "P-10232", name: "Vikram Nair", age: "58 / M", doctor: "Dr. Iyer", visit: "Jul 2, 2026", status: "Discharged" },
  { id: "P-10233", name: "Meera Das", age: "27 / F", doctor: "Dr. Rao", visit: "Jul 4, 2026", status: "Active" },
  { id: "P-10234", name: "Arjun Mehta", age: "45 / M", doctor: "Dr. Sen", visit: "Jul 1, 2026", status: "Active" },
  { id: "P-10235", name: "Fatima Sheikh", age: "62 / F", doctor: "Dr. Iyer", visit: "Jun 29, 2026", status: "Discharged" },
  { id: "P-10236", name: "Rohan Gupta", age: "8 / M", doctor: "Dr. Bhatt", visit: "Jul 4, 2026", status: "Active" },
];

export const appointments = [
  { patient: "Ananya Sharma", doctor: "Dr. Rao", dept: "Cardiology", time: "Today, 10:30 AM", status: "Confirmed" },
  { patient: "Vikram Nair", doctor: "Dr. Iyer", dept: "Orthopedics", time: "Today, 11:15 AM", status: "Confirmed" },
  { patient: "Kavya Menon", doctor: "Dr. Sen", dept: "Dermatology", time: "Today, 1:00 PM", status: "Pending" },
  { patient: "Sameer Khan", doctor: "Dr. Bhatt", dept: "Pediatrics", time: "Today, 2:30 PM", status: "Cancelled" },
  { patient: "Fatima Sheikh", doctor: "Dr. Iyer", dept: "Orthopedics", time: "Tomorrow, 9:00 AM", status: "Confirmed" },
];

export const doctors = [
  { name: "Dr. Priya Rao", dept: "Cardiology", patients: 128, status: "Available" },
  { name: "Dr. Suresh Iyer", dept: "Orthopedics", patients: 94, status: "In surgery" },
  { name: "Dr. Neha Sen", dept: "Dermatology", patients: 76, status: "Available" },
  { name: "Dr. Kabir Bhatt", dept: "Pediatrics", patients: 112, status: "Off duty" },
  { name: "Dr. Alok Verma", dept: "Radiology", patients: 65, status: "Available" },
  { name: "Dr. Divya Nair", dept: "ER", patients: 140, status: "Available" },
];

export const invoices = [
  { id: "INV-2291", patient: "Ananya Sharma", amount: "₹18,400", type: "Insurance", status: "Paid" },
  { id: "INV-2292", patient: "Vikram Nair", amount: "₹42,000", type: "Insurance", status: "Pending" },
  { id: "INV-2293", patient: "Meera Das", amount: "₹6,200", type: "Self-pay", status: "Paid" },
  { id: "INV-2294", patient: "Arjun Mehta", amount: "₹11,850", type: "Self-pay", status: "Overdue" },
  { id: "INV-2295", patient: "Rohan Gupta", amount: "₹3,400", type: "Insurance", status: "Paid" },
];

export const initialTenants = [
  { id: "T-001", name: "Riverside General Hospital", plan: "Hospital Network", status: "Active", patients: "18,400", mrr: "₹45,600", joined: "Jan 2025" },
  { id: "T-002", name: "Sunrise Children's Clinic", plan: "Single Clinic", status: "Active", patients: "2,100", mrr: "₹12,300", joined: "Mar 2025" },
  { id: "T-003", name: "Metro Care Hospitals", plan: "Enterprise", status: "Active", patients: "94,200", mrr: "₹2,80,000", joined: "Aug 2024" },
  { id: "T-004", name: "Green Valley Medical Center", plan: "Hospital Network", status: "Trial", patients: "640", mrr: "₹0", joined: "Jun 2026" },
  { id: "T-005", name: "Lakeside Orthopedic Group", plan: "Single Clinic", status: "Suspended", patients: "3,800", mrr: "₹0", joined: "Nov 2024" },
  { id: "T-006", name: "Northgate Health Network", plan: "Enterprise", status: "Active", patients: "61,500", mrr: "₹1,95,000", joined: "Feb 2024" },
  { id: "T-007", name: "Harborview Maternity Care", plan: "Single Clinic", status: "Active", patients: "1,950", mrr: "₹14,900", joined: "May 2025" },
];

export const tenantGrowth = [
  { m: "Feb", v: 32 }, { m: "Mar", v: 35 }, { m: "Apr", v: 38 }, { m: "May", v: 41 }, { m: "Jun", v: 44 }, { m: "Jul", v: 46 },
];

export const uptimeData = Array.from({ length: 14 }).map((_, i) => ({
  d: `D${i + 1}`, v: 99.9 + Math.sin(i) * 0.05 + (i === 9 ? -0.4 : 0),
}));

export const incidents = [
  { title: "Elevated API latency — EU region", time: "Jun 28, 2026 · 14:02", status: "Resolved" },
  { title: "Scheduled maintenance — billing service", time: "Jun 21, 2026 · 02:00", status: "Resolved" },
  { title: "Brief login delay — 3 tenants affected", time: "Jun 14, 2026 · 09:40", status: "Resolved" },
];
