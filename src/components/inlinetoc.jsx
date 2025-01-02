import React from "react";
import { useLocation, useHistory } from "@docusaurus/router";

const CustomTOCInline = ({ toc, version }) => {
  const location = useLocation();
  const history = useHistory();

  // Ensure that version is appended correctly
  const pathWithoutVersion = location.pathname
    .split("/")
    .slice(0, -1)
    .join("/");
  const versionPath = version ? `/${version}` : "";

  const customToc = toc.map((item) => {
    const fullUrl = `${pathWithoutVersion}${versionPath}#${item.id}`;

    const handleClick = (e) => {
      // Manually update the hash to trigger scrolling
      e.preventDefault();
      history.push(fullUrl);
    };

    return (
      <li key={item.id}>
        <a href={fullUrl} onClick={handleClick}>
          {item.value}
        </a>
      </li>
    );
  });

  return <ul>{customToc}</ul>;
};

export default CustomTOCInline;

// // src/components/CustomTOCInline.jsx
// import React from "react";
// import TOCInline from "@theme/TOCInline";
// import { useLocation } from "@docusaurus/router";

// const CustomTOCInline = ({ toc, version }) => {
//   // Get the current location path
//   const location = useLocation();

//   // Render TOC items manually with the correct versioned path
//   const customToc = toc.map((item) => {
//     // Directly use the current path and append the version and anchor
//     const fullUrl = `${location.pathname}${version}#${item.id}`;

//     // Return the item with the updated href
//     return (
//       <li key={item.id}>
//         <a href={fullUrl}>{item.value}</a>
//       </li>
//     );
//   });

//   return <ul>{customToc}</ul>;
// };

// export default CustomTOCInline;
