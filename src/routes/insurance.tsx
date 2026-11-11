import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance Services | Ace Logistic Finance" },
      { name: "description", content: "Ask Ace Logistic Finance about health, term, vehicle and group insurance options through multiple insurance-company tie-ups." },
      { property: "og:title", content: "Insurance Services | Ace Logistic Finance" },
      { property: "og:description", content: "Insurance enquiry assistance for health, term, vehicle and group cover." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsuranceRoute,
});

function InsuranceRoute() {
  return <ContentPage page="insurance" />;
}