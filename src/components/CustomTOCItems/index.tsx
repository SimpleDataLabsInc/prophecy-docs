import React, { type ReactNode, useMemo } from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useTOCHighlight,
  useFilteredAndTreeifiedTOC,
  type TOCHighlightConfig,
} from "@docusaurus/theme-common/internal";
import CustomTOCItemTree from "@site/src/components/CustomTOCItems/Tree";
import type { Props } from "@theme/TOCItems";

// Extend Props to include the path variable
interface CustomProps extends Props {
  path: string;
}

export default function CustomTOCItems({
  toc,
  className = "table-of-contents table-of-contents__left-border",
  linkClassName = "table-of-contents__link",
  linkActiveClassName = undefined,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  path, // Accept the path variable as a prop
  ...props
}: CustomProps): ReactNode {
  const themeConfig = useThemeConfig();

  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;

  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  const tocHighlightConfig: TOCHighlightConfig | undefined = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);

  useTOCHighlight(tocHighlightConfig);

  return (
    <CustomTOCItemTree
      toc={tocTree}
      className={className}
      linkClassName={linkClassName}
      path={path} // Pass the path variable to the child component
      {...props}
    />
  );
}
