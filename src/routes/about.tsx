import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ace Logistic Finance | Personal Finance Guidance" },
      { name: "description", content: "Meet Ace Logistic Finance, founded by Usha Nishad, helping people explore loan and insurance options in Kandivali East, Mumbai." },
      { property: "og:title", content: "About Ace Logistic Finance" },
      { property: "og:description", content: "Personal guidance for loan and insurance enquiries from Ace Logistic Finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return <ContentPage page="about" />;
}