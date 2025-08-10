
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
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Building,
  LayoutDashboard,
  LogOut,
  GraduationCap,
  Heart,
  FileCheck2,
  ListTodo
} from "lucide-react";
import { Button } from "./ui/button";

export function UniversitySidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Building className="w-8 h-8 text-primary" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold font-headline">EduTrust</h2>
            <p className="text-xs text-muted-foreground">Cổng thông tin Trường học</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        href="/university"
                        asChild
                        isActive={isActive('/university')}
                    >
                        <Link href="/university">
                            <LayoutDashboard />
                            <span>Bảng điều khiển</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/university/verification"
                        asChild
                        isActive={isActive('/university/verification')}
                    >
                        <Link href="#">
                            <FileCheck2 />
                            <span>Xác thực Hồ sơ</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/university/management"
                        asChild
                        isActive={isActive('/university/management')}
                    >
                        <Link href="#">
                            <ListTodo />
                            <span>Quản lý Sinh viên</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
         <SidebarGroup>
            <SidebarGroupLabel>Chuyển đổi vai trò</SidebarGroupLabel>
            <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/student/dashboard"
                        asChild
                        isActive={isActive('/student')}
                    >
                        <Link href="/student/dashboard">
                            <GraduationCap />
                            <span>Dành cho Sinh viên</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/sponsor/dashboard"
                        asChild
                        isActive={isActive('/sponsor/dashboard')}
                    >
                        <Link href="/sponsor/dashboard">
                            <Heart />
                            <span>Dành cho Nhà tài trợ</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2">
            <Avatar>
                <AvatarImage src="https://placehold.co/100x100.png" alt="University" data-ai-hint="university logo"/>
                <AvatarFallback>ĐH</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <p className="text-sm font-semibold">Đại học ABC</p>
                <p className="text-xs text-muted-foreground">admin@university.edu</p>
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
