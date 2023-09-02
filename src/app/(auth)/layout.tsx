import { Text } from "@/components/UI";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface ILayout {
  path: string;
  children: React.ReactNode;
}

export default function RootLayout({ children }: ILayout) {
  return (
    <div className="flex flex-col md:flex-row w-screen h-max flex-col-reverse">
      {/* left section  */}
      <div className="md:w-1/2 bg-buttonSecondary">
        {/* logo */}
        <div className="p-12">
          <Text variant="titleXl" className="inline-block max-w-max text-white">
            LOGO
          </Text>
        </div>
      </div>
      <div className="bg-primary md:w-1/2">
        <div className="flex items-center justify-center h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}