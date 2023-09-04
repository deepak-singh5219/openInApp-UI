import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import SidebarProvider from "@/context/SidebarContext";
import DataApiProvider from "@/context/ApiContext";
import FormDataProvider from "@/context/FormContext";
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
      <FormDataProvider>
      <DataApiProvider>
        <SidebarProvider>
          <div className="md:h-screen h-full px-2 fixed w-screen md:m-4  flex flex-row justify-start">
            <SideBar />
            <div className="flex flex-col flex-1 w-full mt-4 md:mt-0 md:px-8 px-2 ">
              <NavBar />
              <div className="bg-primary overflow-y-auto mt-6 flex-2  mb-6 text-primary">
                {children}
              </div>
            </div>
          </div>
        </SidebarProvider>
      </DataApiProvider>
      </FormDataProvider>
    </>
  );
}
