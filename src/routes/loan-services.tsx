import { createFileRoute } from "@tanstack/react-router";

import { ContentPage } from "@/components/site/page-content";

export const Route = createFileRoute("/loan-services")({
  head: () => ({
    meta: [
      { title: "Loan Services | Ace Logistic Finance" },
      { name: "description", content: "Explore personal, business, home, mortgage, vehicle and unsecured overdraft loan enquiries with Ace Logistic Finance." },
      { property: "og:title", content: "Loan Services | Ace Logistic Finance" },
      { property: "og:description", content: "Loan options and application guidance through multiple lending partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoanServicesRoute,
});

function LoanServicesRoute() {
  return <ContentPage page="loan-services" />;
}