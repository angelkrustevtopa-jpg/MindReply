import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Operations | MindReply",
  description: "Advanced Manus Intelligence infrastructure for high-stakes property management, lead scoring, and hyper-local SEO listings in Sofia and beyond.",
  openGraph: {
    title: "Real Estate Operations | MindReply",
    description: "Advanced Manus Intelligence infrastructure for high-stakes property management and lead scoring.",
    url: "https://www.mind-reply.com/real-estate",
    type: "website",
  },
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
