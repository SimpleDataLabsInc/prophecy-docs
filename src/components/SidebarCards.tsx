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

  // Default filter: exclude HTML items, index pages, and only show items with valid href
  const defaultFilter = (item: any) => {
    // Handle string references (like "getting-started/settings")
    if (typeof item === "string") {
      return !item.includes("index"); // Exclude string references to index pages
    }
    // Handle objects with type property - only include items with href
    if ((item.type === "link" || item.type === "category") && item.href) {
      // Exclude links containing "index" and items labeled "Overview"
      return !item.href.includes("index") && item.label !== "Overview";
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
              {""}
            </Card>
          );
        }

        // Handle objects with type property
        if (item.type === "link" || item.type === "category") {
          return (
            <Card key={index} title={item.label} to={item.href}>
              {""}
            </Card>
          );
        }

        return null;
      })}
    </CardContainer>
  );
}
