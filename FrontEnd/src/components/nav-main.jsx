import { useLocation, Link } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export function NavMain({ items, groupLabel }) {
  const location = useLocation();

  return (
    <SidebarGroup className="space-y-1">
      <SidebarGroupLabel>
        <p className="font-normal text-sm text-gray-400">{groupLabel}</p>
      </SidebarGroupLabel>

      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="space-y-1">
          {items.map((item) => {
            const isActive =
              location.pathname === item.href ||
              location.pathname.startsWith(item.url + "/");

            return (
              <SidebarMenuItem key={item.title} >
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  className="text-sm py-5 px-4 text-gray-500 font-medium"
                >
                  <Link to={item.url} className="flex items-center gap-5">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}