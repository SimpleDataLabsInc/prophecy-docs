import React from "react";
import "../css/custom.css";
import Link from "@docusaurus/Link";

/* CardContainer Component: Wraps multiple Card components */
export const CardContainer = ({ children }) => (
  <div className="card-container">{children}</div>
);

/* Card Component: Represents an individual card with a link */
export const Card = ({ title, to, children }) => (
  <Link to={to} className="card">
    <div className="card-title">{title}</div>
    <div className="card-content">{children}</div>
  </Link>
);
