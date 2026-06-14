import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

export default function BlogLayout({
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
