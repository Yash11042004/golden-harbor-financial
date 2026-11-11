import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ace Logistic Finance | Kandivali East" },
      { name: "description", content: "Call Ace Logistic Finance at 88501 48489 or visit 3rd Floor, 35 No., above Sandeep Hotel, Kandivali East Station, Mumbai." },
      { property: "og:title", content: "Contact Ace Logistic Finance" },
      { property: "og:description", content: "Call or visit Ace Logistic Finance in Kandivali East, Mumbai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return <ContentPage page="contact" />;
}