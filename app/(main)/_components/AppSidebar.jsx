"use client"
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarOption } from "@/services/constants";
import {Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {

  const pathname = usePathname();
  return (
    <Sidebar className="">
      <SidebarHeader className="flex items-center mt-5">
        <Image src="/logo3.svg" alt="logo" width={200} height={100} />
        <Button className="w-full mt-3 bg-[#0A66C2]">
          <Plus />
          Create New Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarContent>
          <SidebarMenu>
            {SidebarOption.map((option, index) => (
              <SidebarMenuItem key={index} className="p-1">
                <SidebarMenuButton asChild className={`p-5 ${pathname==option.path && "bg-[#a5c5e54b]"}`}>
                  <Link href={option.path}>
                    <option.icon size={22} className={`${pathname==option.path && 'text-primary'}`}/>
                    <span className={`text-[16px] font-medium ${pathname==option.path && 'text-primary'}`}>{option.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
