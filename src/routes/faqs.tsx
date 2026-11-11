import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Ace Logistic Finance" },
      { name: "description", content: "Answers about loan services, insurance enquiries, documents, processing and provider decisions at Ace Logistic Finance." },
      { property: "og:title", content: "FAQs | Ace Logistic Finance" },
      { property: "og:description", content: "Helpful answers about loan and insurance enquiries with Ace Logistic Finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqsRoute,
});

function FaqsRoute() {
  return <ContentPage page="faqs" />;
}