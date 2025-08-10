import { AppSidebar } from "@/components/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-secondary/30">
        {children}
      </main>
    </div>
  );
}
