import React from "react";
import { InkeepSearchBar } from "@inkeep/cxkit-react";
import { InkeepChatButton } from "@inkeep/cxkit-react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const SearchBar = () => {
  const { siteConfig } = useDocusaurusContext();
  const apiKey = siteConfig.customFields?.inkeepApiKey;

  const searchConfig = {
    baseSettings: {
      apiKey: apiKey,
      organizationDisplayName: "Prophecy",
      primaryBrandColor: "#403FC2",
      transformSource: (source, type, opts) => {
        const tabs = [...(source.tabs || [])];

        console.log("Source debug:", {
          url: source.url,
          type: source.type,
          title: source.title,
          breadcrumbs: source.breadcrumbs,
          firstBreadcrumb: source.breadcrumbs?.[0],
          isBlog: source.breadcrumbs?.[0] === "Blog",
          finalTabs: tabs,
        });

        // Categorize sources based on URL slug
        if (source.url.includes("docs.prophecy.io/analysts/")) {
          tabs.push("Analysts");
        } else if (source.url.includes("docs.prophecy.io/engineers/")) {
          tabs.push("Engineers");
        }

        // Add Blog tab based on breadcrumbs
        if (source.breadcrumbs?.includes("Blog")) {
          tabs.push("Blog");
        }

        return {
          ...source,
          tabs,
        };
      },
      theme: {
        styles: [
          {
            key: "1",
            type: "style",
            value: `
                /* Responsive search bar - hide text on small screens */
                @media (max-width: 40em) {
                  .ikp-search-bar__button {
                    padding-inline: 7px;
                  }
                  .ikp-search-bar__text {
                    display: none;
                  }
                  .ikp-search-bar__kbd-wrapper {
                    display: none;
                  }
                }
            `,
          },
          {
            key: "2",
            type: "style",
            value: `
                .ikp-ai-ask-ai-trigger__icon {
                  height: auto !important;
            `,
          },
        ],
      },
    },
    searchSettings: {
      tabs: ["All", "Analysts", "Engineers", "Blog"],
    },
    aiChatSettings: {
      exampleQuestions: [
        "Do I need a fabric to run my pipeline?",
        "How can Copilot help me build projects?",
        "How do I add data to my pipeline?",
        "Can I monitor my deployed projects?",
      ],
      exampleQuestionsLabel: "Example Questions",
      isFirstExampleQuestionHighlighted: true,
      aiAssistantAvatar: "/img/icon.png",
    },
  };

  const chatConfig = {
    defaultView: "chat",
    baseSettings: {
      apiKey: apiKey,
      organizationDisplayName: "Prophecy",
      primaryBrandColor: "#403FC2",
      theme: {
        styles: [
          {
            key: "chat-button-styles",
            type: "style",
            value: `
                /* make the chat button not floating */
                .ikp-chat-button__container {
                  position: relative;
                  bottom: unset;
                  right: unset;
                  z-index: 0; /* ensure it sits behind navbar sidebar panel */
                }
                .ikp-chat-button__button {
                  background: transparent;
                  border-width: 1px;
                  color: var(--ifm-font-color-base);
                  border-radius: 6px;
                  box-shadow: none;
                  font-size: var(--ikp-font-size-md);
                  flex-direction: row-reverse;
                  padding: 5px 12px;
                  white-space: nowrap;
                  overflow: hidden;
                  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
                }
                .ikp-chat-button__button:hover {
                  transform: none !important;
                  background: var(--ifm-color-emphasis-200);
                }
                .ikp-chat-button__avatar-content {
                  margin-right: 6px !important;
                  margin-left: 0 !important;
                  flex-shrink: 0;
                }
                span.ikp-chat-button__avatar-content > img.ikp-chat-button__avatar-image {
                  height: auto !important;
                }
                }
            `,
          },
        ],
      },
    },
    aiChatSettings: {
      exampleQuestions: [
        "Do I need a fabric to run my pipeline?",
        "How can Copilot help me build projects?",
        "How do I add data to my pipeline?",
        "Can I monitor my deployed projects?",
      ],
      exampleQuestionsLabel: "Example Questions",
      isFirstExampleQuestionHighlighted: true,
      aiAssistantAvatar: "/img/icon.png",
    },
    label: "Ask AI",
  };

  return (
    <div
      className="custom-search-container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: "30px",
        minWidth: 0, // Allow container to shrink
        flexShrink: 1, // Allow the container to shrink if needed
      }}
    >
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <InkeepSearchBar {...searchConfig} />
      </div>
      <div style={{ flex: "0 0 auto" }}>
        <InkeepChatButton {...chatConfig} />
      </div>
    </div>
  );
};

export default SearchBar;
