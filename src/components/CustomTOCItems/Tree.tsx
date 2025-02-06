import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/TOCItems/Tree";

// Extend the Props type to include the path variable
interface CustomProps extends Props {
  path: string;
}

// Recursive component rendering the TOC tree
function CustomTOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
  path, // Accept the path variable as a prop
}: CustomProps): ReactNode {
  if (!toc.length) {
    return null;
  }

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <li key={heading.id}>
          <Link
            to={`${path}#${heading.id}`} // Use the path variable here
            className={linkClassName ?? undefined}
            // Developer provided the HTML, so assume it's safe.
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />
          <CustomTOCItemTree
            isChild
            toc={heading.children}
            className={className}
            linkClassName={linkClassName}
            path={path} // Pass the path variable down to the children
          />
        </li>
      ))}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(CustomTOCItemTree);
