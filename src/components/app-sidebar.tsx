"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GraduationCap,
  LayoutDashboard,
  Handshake,
  Lightbulb,
  Landmark,
  Pencil,
  LogOut,
  Settings
} from "lucide-react";
import { Button } from "./ui/button";

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold font-headline">EduTrust</h2>
            <p className="text-xs text-muted-foreground">Xin chào, Sinh viên!</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Dành cho Sinh viên</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        href="/student/dashboard"
                        asChild
                        isActive={isActive('/student/dashboard')}
                    >
                        <Link href="/student/dashboard">
                            <LayoutDashboard />
                            <span>Bảng điều khiển</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/student/assessment"
                        asChild
                        isActive={isActive('/student/assessment')}
                    >
                        <Link href="/student/assessment">
                            <Pencil />
                            <span>Đánh giá EduTrust</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/student/resources"
                        asChild
                        isActive={isActive('/student/resources')}
                    >
                        <Link href="/student/resources">
                            <Lightbulb />
                            <span>Tài nguyên học tập</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>Dành cho Đối tác</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        href="/sponsor/dashboard"
                        asChild
                        isActive={isActive('/sponsor/dashboard')}
                    >
                        <Link href="/sponsor/dashboard">
                            <Handshake />
                            <span>Nhà tài trợ</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/university"
                        asChild
                        isActive={isActive('/university')}
                    >
                        <Link href="/university">
                            <Landmark />
                            <span>Trường Đại học</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2">
            <Avatar>
                <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="student avatar"/>
                <AvatarFallback>SV</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <p className="text-sm font-semibold">Nguyễn Văn A</p>
                <p className="text-xs text-muted-foreground">sinhvien@email.com</p>
            </div>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                    <LogOut className="w-4 h-4" />
                </Link>
            </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
