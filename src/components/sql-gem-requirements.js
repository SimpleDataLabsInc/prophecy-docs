import React from "react";
import "../css/custom.css";

export default function SQLRequirements(props) {
  return (
    <div>
      {props.execution_engine && (
        <a href="https://docs.prophecy.io/administration/fabrics/prophecy-fabrics/">
          <span className="badge">{props.execution_engine}</span>
        </a>
      )}
      {props.sql_package_name && props.sql_package_version && (
        <a href="https://docs.prophecy.io/engineers/package-hub/">
          <span className="badge-dependency">
            <span className="left">{props.sql_package_name}</span>
            <span className="right">{props.sql_package_version}</span>
          </span>
        </a>
      )}
      <br />
      <br />
    </div>
  );
}
