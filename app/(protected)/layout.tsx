import Sidebar from "@/components/sidebar";
import AuthGuard from "@/components/auth-guard";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}