import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import SidebarProvider from "@/context/SidebarContext";
export const metadata = {
  title: "openinappui",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <SidebarProvider>
    <div className="h-screen w-screen md:m-8 flex flex-row justify-start">
        <SideBar />
        <div className="bg-primary flex-1 p-4 text-primary">
          <NavBar />
          {children}
        </div>
        <div className="bg-primary flex-1 p-4 text-primary">{children}</div>
      </div>
    </SidebarProvider>
    </>
  );
}
