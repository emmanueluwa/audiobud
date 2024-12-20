import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        {/* left */}
        <p className="text-white-1">
          <LeftSidebar />
        </p>
        {/* main  */}
        {children}
        <p className="text-white-1">righty</p>
        {/* right */}
      </main>
    </div>
  );
}
