import React from "react";
import "../css/custom.css";

export default function Requirements(props) {
  return (
    <div>
      {props.python_package_name && props.python_package_version && (
        <a href="https://docs.prophecy.io/engineers/package-hub/">
          <span className="badge-dependency">
            <span className="left">{props.python_package_name}</span>
            <span className="right">{props.python_package_version}</span>
          </span>
        </a>
      )}

      {props.scala_package_name && props.scala_package_version && (
        <a href="https://docs.prophecy.io/engineers/package-hub">
          <span className="badge-dependency">
            <span className="left">{props.scala_package_name}</span>
            <span className="right">{props.scala_package_version}</span>
          </span>
        </a>
      )}

      {props.python_lib && (
        <a href="https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries">
          <span className="badge-dependency">
            <span className="left">ProphecyLibsPython</span>
            <span className="right">{props.python_lib}</span>
          </span>
        </a>
      )}

      {props.scala_lib && (
        <a href="https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries">
          <span className="badge-dependency">
            <span className="left">ProphecyLibsScala</span>
            <span className="right">{props.scala_lib}</span>
          </span>
        </a>
      )}

      {props.uc_single && (
        <a href="https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/">
          <span className="badge-spark">
            <span className="left">Databricks UC Single Cluster</span>
            <span className="right">{props.uc_single}</span>
          </span>
        </a>
      )}

      {props.uc_shared && (
        <a href="https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared">
          <span className="badge-spark">
            <span className="left">Databricks UC Shared</span>
            <span className="right">{props.uc_shared}</span>
          </span>
        </a>
      )}

      {props.livy && (
        <a href="https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy">
          <span className="badge-spark">
            <span className="left">Livy</span>
            <span className="right">{props.livy}</span>
          </span>
        </a>
      )}

      <br />
      <br />
    </div>
  );
}
