import React, { type ReactNode } from "react";
import CustomTOCItems from "./toc-index";
import type { Props } from "@theme/TOCInline";
import styles from "./styles.module.css";

// Extend Props to include the path variable
// Extend Props to include item and path
interface CustomProps extends Props {
  item: any; // Adjust type if you know the structure of `item`
  path: string;
}

export default function CustomTOCInline({
  item,
  path,
  minHeadingLevel = 2, // Provide default value
  maxHeadingLevel = 6, // Provide default value
}: CustomProps): ReactNode {
  // Extract TOC data from the item (if necessary)
  const toc = item.toc ?? []; // Adjust this based on the structure of `item`

  return (
    <div className={styles.tableOfContentsInline}>
      <CustomTOCItems
        toc={toc}
        minHeadingLevel={minHeadingLevel}
        maxHeadingLevel={maxHeadingLevel}
        className="table-of-contents"
        linkClassName={null}
        path={path} // Pass the path variable
      />
    </div>
  );
}
