import SideBar from "@/components/SideBar";

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
      <div className="h-screen flex flex-row justify-start">
        <SideBar />
        <div className="bg-primary flex-1 p-4 text-primary">{children}</div>
      </div>
    </>
  );
}
