import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

export default function FreeGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      {children}
    </>
  );
}
