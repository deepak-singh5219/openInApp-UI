
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import SidebarProvider from "@/context/SidebarContext";
import DataApiProvider from "@/context/ApiContext"


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
    <DataApiProvider>
    <SidebarProvider>
    <div className="h-screen px-10 fixed w-screen md:m-6 md:p-2 flex flex-row justify-start">
        <SideBar />
        <div className="flex flex-col flex-1 w-full mt-4 md:mt-0 mx-2 md:px-12 px-4 ">
        <NavBar/>
         
        <div className="bg-primary overflow-y-auto mt-6 flex-2 px-4 mb-6 text-primary">{children}</div>
        </div>
      </div>
    </SidebarProvider>
    </DataApiProvider>
    </>
  );
}
