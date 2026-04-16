import { Home, User, Settings, Bell, MessageSquare, PieChart } from "lucide-react"

export const sidebarData = {
  user: {
    name: "Traktirku Admin",
    email: "admin@traktirku.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: PieChart,
      children: [
        { title: "Statistik", url: "/analytics/stats" },
        { title: "Laporan", url: "/analytics/reports" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      children: [
        { title: "General", url: "/settings/general" },
        { title: "Security", url: "/settings/security" },
      ],
    },
  ],
}
