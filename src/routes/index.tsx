import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Ebrahim — Backend Engineer (Laravel & React.js)" },
      {
        name: "description",
        content:
          "Portfolio of Ahmed Ebrahim, a Backend Engineer with 3+ years building scalable Laravel systems, REST APIs, and real-time platforms.",
      },
      { property: "og:title", content: "Ahmed Ebrahim — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Scalable Laravel backends, REST APIs, WebSockets, and clean architecture — by Ahmed Ebrahim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
