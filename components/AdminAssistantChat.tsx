"use client";

import MRAgentChat from "./MRAgentChat";

// We can wrap MRAgentChat or just use it with specific props if we modify it.
// For now, I'll just use MRAgentChat in the admin page.
// But I'll update MRAgentChat to handle the administrative context.

export default function AdminAssistantChat() {
  return <MRAgentChat compact />;
}
