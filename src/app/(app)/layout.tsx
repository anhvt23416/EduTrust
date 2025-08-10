
"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SponsorSidebar } from "@/components/sponsor-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSponsorRoute = pathname.startsWith('/sponsor');

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {isSponsorRoute ? <SponsorSidebar /> : <AppSidebar />}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-secondary/30">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
