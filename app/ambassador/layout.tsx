import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="アンバサダー" sub="ambassador" />
      <Sheet>{children}</Sheet>
    </>
  );
}