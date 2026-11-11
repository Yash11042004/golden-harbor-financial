import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners | Ace Logistic Finance" },
      { name: "description", content: "Learn about Ace Logistic Finance's network of bank, NBFC and insurance-company tie-ups in India." },
      { property: "og:title", content: "Our Partners | Ace Logistic Finance" },
      { property: "og:description", content: "Explore lending and insurance provider categories available through Ace Logistic Finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersRoute,
});

function PartnersRoute() {
  return <ContentPage page="partners" />;
}