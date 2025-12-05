import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

export default function AnnouncementBar() {
  const { siteConfig } = useDocusaurusContext();
  const { announcementBar } = siteConfig.themeConfig || {};

  if (!announcementBar || !announcementBar.content) {
    return null;
  }

  const backgroundColor = announcementBar.backgroundColor || "#f3f4f6";
  const textColor = announcementBar.textColor || "#403fc2";

  return (
    <div
      className={clsx(styles.announcementBar)}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <div className={clsx("container", styles.announcementBarContent)}>
        <div dangerouslySetInnerHTML={{ __html: announcementBar.content }} />
      </div>
    </div>
  );
}
