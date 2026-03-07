import Header from "@/components/layout/Header";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <ScrollProgress />
      <main id="main-content">{children}</main>
    </>
  );
}
