import { Brain, Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";

export const SideBarOptions = [
    {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Pragya Ai 1.0",
    icon: Brain,
    path: "https://pragya-ai.vercel.app",
  },

  {
    name: "Scheduled Interview",
    icon: Calendar,
    path: "/scaheduled-interview",
  },
  {
    name: "All Interviews",
    icon: List,
    path: "/all-interviews",
  },
  {
    name: "Billing",
    icon: WalletCards,
    path: "/billing",
  },
  {
    name: "Setting",
    icon: Settings,
    path: "/setting",
  }
];
