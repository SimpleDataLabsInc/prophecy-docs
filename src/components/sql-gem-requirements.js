import React from "react";
import "../css/custom.css";

export default function SQLRequirements(props) {
  return (
    <div>
      {props.execution_engine && (
        <a href="https://docs.prophecy.io/core/prophecy-fabrics/">
          <span className="badge badge-runtime">{props.execution_engine}</span>
        </a>
      )}

      {props.sql_package_name && props.sql_package_version && (
        <a href="https://docs.prophecy.io/engineers/package-hub/">
          <span className="badge badge-dependency">
            {props.sql_package_name} {props.sql_package_version}
          </span>
        </a>
      )}

      <br />
      <br />
    </div>
  );
}
