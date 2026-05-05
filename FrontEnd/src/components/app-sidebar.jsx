import * as React from "react";
import logo from "../assets/logo-color.png";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  TrendingUp,
  UserCog,
  ShoppingCart,
} from "lucide-react";
import { useSelector } from "react-redux";

const data = {
  navGeneral: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
      roles: ["admin", "user"],
    },
    {
      title: "Kelola Users",
      url: "/users",
      icon: <UserCog />,
      roles: ["admin"],
    },
    {
      title: "Penjualan Harian",
      url: "/daily-sales",
      icon: <ShoppingCart />,
      roles: ["admin", "user"],
    },
  ],

  navForecast: [
    {
      title: "Penjualan Bulanan",
      url: "/monthly-sales",
      icon: <ShoppingCart />,
      roles: ["admin", "user"],
    },
    {
      title: "Prediksi",
      url: "/predict",
      icon: <TrendingUp />,
      roles: ["admin"],
    },
  ],
};

const filterByRole = (items, role) => {
  return items.filter((item) => item.roles.includes(role));
};

export function AppSidebar({ ...props }) {
  const { user } = useSelector((state) => state.auth);

  const navGeneral = filterByRole(data.navGeneral, user?.role);
  const navForecast = filterByRole(data.navForecast, user?.role);

  return (
    <Sidebar collapsible="offcanvas" {...props} className="space-y-1">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! h-auto"
            >
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Logo WaterCast"
                  className="w-40 h-auto object-contain"
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navGeneral} groupLabel="GENERAL" />
        {navForecast.length > 0 && (
          <NavMain items={navForecast} groupLabel="FORECAST" />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
