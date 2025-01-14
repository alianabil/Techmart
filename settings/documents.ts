import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Analisis dan desain perangkat lunak",
    href: "/structure",
    items: [
      {
        title: "Analisis Kebutuhan",
        href: "/deeper",
        items : [
          {
            title: "Business Requirement",
            href: "/business-requirement",
          },
          {
            title: "Stakeholder Requirement",
            href: "/stakeholder-requirement",
          },
          {
            title: "System Requirement",
            href: "/sistem-requirement",
          },
          {
            title: "Software Requirement",
            href: "/software-requirement",
          },
        ],
      },
      {
        title: "Diagram",
        href: "/Diagram",
        items : [
          {
            title: "Use Case Diagram",
            href: "/Use-Case-Diagram",
          },
          {
            title: "Diagram Class",
            href: "/Diagram-Class",
          },
          {
            title: "Flow Chart",
            href: "/FlowChart",
          },
        ],
      },
    ],
  },
  {
    title: "Perancangan Desain Antarmuka",
    href: "/perancangan-desain-antarmuka",
    items: [
      {
        title: "Dokumen Desain",
        href: "/dokumen-desain",
        items: [
          {
            title: "Sketsa Awal",
            href: "/sketsa-awal",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markup",
    href: "/markup",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Desain",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];