import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse & Business Updates | MindReply",
  description: "Real-time business updates, executive infrastructure milestones, and market innovations from MindReply.",
  openGraph: {
    title: "Pulse & Business Updates | MindReply",
    description: "Real-time business updates and executive infrastructure milestones.",
    url: "https://www.mind-reply.com/news",
    type: "website",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
