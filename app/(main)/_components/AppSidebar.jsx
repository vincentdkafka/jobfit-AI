"use client";
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
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="h-screen w-72 bg-white border-r border-gray-200 flex flex-col">
      
      <div className="px-4 py-6 flex flex-col items-center gap-4">
        <Link href="/">
          <Image
            src="/logo3.svg"
            alt="logo"
            width={150}
            height={50}
            className="cursor-pointer my-4"
          />
        </Link>
        <Button className="w-full h-12 text-[18px] bg-[#0A66C2] hover:bg-blue-700 flex items-center justify-center gap-2">
          <Plus size={18} />
          Create New Interview
        </Button>
      </div>

      {/* CONTENT: menu */}
      <SidebarContent className="px-2 py-2 overflow-y-auto flex flex-col">
        <SidebarMenu>
          {SidebarOption.map((option, index) => (
            <SidebarMenuItem key={index} className="mb-3">
              <SidebarMenuButton
                asChild
                className={`flex items-center gap-4 px-8 py-3 rounded-lg hover:bg-gray-100 transition ${
                  pathname === option.path ? "bg-[#a5c5e54b]" : ""
                }`}
              >
                <Link
                  href={option.path}
                  className="flex items-center gap-3 w-full"
                >
                  <option.icon
                    size={32}
                    className={`${
                      pathname === option.path
                        ? "text-primary"
                        : "text-gray-600"
                    }`}
                  />
                  <span
                    className={`text-[18px] font-medium ${
                      pathname === option.path
                        ? "text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {option.name}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="px-4 py-4 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Jobfit-AI
      </SidebarFooter>
    </Sidebar>
  );
}
