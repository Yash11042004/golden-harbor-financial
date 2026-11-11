import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Start an Enquiry | Ace Logistic Finance" },
      { name: "description", content: "Send a loan or insurance enquiry to Ace Logistic Finance and get guidance on possible next steps." },
      { property: "og:title", content: "Start an Enquiry | Ace Logistic Finance" },
      { property: "og:description", content: "Start your loan or insurance enquiry with Ace Logistic Finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyRoute,
});

function ApplyRoute() {
  return <ContentPage page="apply" />;
}