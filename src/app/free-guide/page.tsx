import { Metadata } from "next";
import LeadMagnet from "@/components/LeadMagnet";

export const metadata: Metadata = {
  title: "Free Guide: 10-Point Web Performance Checklist | Brij Singla",
  description:
    "Download the free performance checklist I use for every client project. Covers Core Web Vitals, JavaScript optimization, image delivery, and more.",
  openGraph: {
    title: "Free: 10-Point Web Performance Checklist",
    description:
      "The exact checklist used to achieve 45% load time improvements. Download free.",
    type: "website",
  },
};

export default function FreeGuidePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10">
      <LeadMagnet />
    </main>
  );
}
