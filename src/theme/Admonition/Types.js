import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

function EditionAdmonition({ title, children }) {
  return (
    <div
      className="theme-admonition theme-admonition-info admonition_xJq3 alert"
      style={{
        backgroundColor: "var(--ifm-color-secondary-contrast-background)",
        boxShadow: "none", // Remove shadow
        border: "1px solid #d1d5db", // Add light gray border
        // Alternative: use CSS custom property for consistency
        // border: "1px solid var(--ifm-color-emphasis-300)",
      }}
    >
      <div class="admonitionHeading_Gvgb">
        <span class="admonitionIcon_Rf37">
          <img
            src="/img/icon.png"
            alt="icon"
            style={{
              width: 20,
              marginRight: 5,
              marginTop: 5,
              marginBottom: 8,
            }}
          />
        </span>
        {title}
      </div>
      <div className="admonitionContent_BuS1">{children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  edition: EditionAdmonition,
};

export default AdmonitionTypes;
