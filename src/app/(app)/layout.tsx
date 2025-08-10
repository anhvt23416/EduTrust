
"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SponsorSidebar } from "@/components/sponsor-sidebar";
import { UniversitySidebar } from "@/components/university-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSponsorRoute = pathname.startsWith('/sponsor');
  const isUniversityRoute = pathname.startsWith('/university');

  const renderSidebar = () => {
    if (isSponsorRoute) {
      return <SponsorSidebar />;
    }
    if (isUniversityRoute) {
      return <UniversitySidebar />;
    }
    return <AppSidebar />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {renderSidebar()}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-secondary/30 flex flex-col">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
