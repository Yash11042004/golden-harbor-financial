import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/page-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ace Logistic Finance | Loan & Insurance Assistance" },
      { name: "description", content: "Explore loan and insurance options with Ace Logistic Finance in Kandivali East, Mumbai. Personal guidance from enquiry to application." },
      { property: "og:title", content: "Ace Logistic Finance | Loan & Insurance Assistance" },
      { property: "og:description", content: "Loan and insurance assistance with options from multiple providers in India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
