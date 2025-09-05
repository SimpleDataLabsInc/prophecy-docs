import React from "react";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import { Card, CardContainer } from "./card";

interface SidebarCardsProps {
  /** Optional filter function to customize which items are displayed */
  filterItems?: (item: any) => boolean;
}

export default function SidebarCards({ filterItems }: SidebarCardsProps) {
  const sidebar = useDocsSidebar();

  if (!sidebar) return null;

  // Default filter: exclude HTML items and only show items with valid href
  const defaultFilter = (item: any) => {
    // Handle string references (like "getting-started/settings")
    if (typeof item === "string") {
      return !item.includes("index"); // Exclude string references to index pages
    }
    // Handle objects with type property - only include items with href
    if ((item.type === "link" || item.type === "category") && item.href) {
      // Exclude pages with label "Overview"
      return item.label !== "Overview";
    }
    return false;
  };

  const filteredItems = sidebar.items.filter(filterItems || defaultFilter);

  return (
    <CardContainer>
      {filteredItems.map((item: any, index) => {
        // Handle string references
        if (typeof item === "string") {
          return (
            <Card
              key={index}
              title={item.split("/").pop()?.replace(/-/g, " ") || item}
              to={`/${item}`}
            >
              Documentation for{" "}
              {item.split("/").pop()?.replace(/-/g, " ") || item}
            </Card>
          );
        }

        // Handle objects with type property
        if (item.type === "link" || item.type === "category") {
          // Use description if available, otherwise create a default one
          const description =
            item.description ||
            (item.type === "category"
              ? `Explore ${item.label.toLowerCase()} documentation`
              : `Learn about ${item.label.toLowerCase()}`);

          return (
            <Card key={index} title={item.label} to={item.href}>
              {description}
            </Card>
          );
        }

        return null;
      })}
    </CardContainer>
  );
}
