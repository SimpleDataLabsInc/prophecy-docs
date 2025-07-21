import React from "react";
import "../css/custom.css";

export default function Requirements(props) {
  return (
    <div>
      {props.python_package_name && props.python_package_version && (
        <a href="https://docs.prophecy.io/engineers/package-hub/">
          <span className="badge badge-dependency">
            {props.python_package_name} {props.python_package_version}
          </span>
        </a>
      )}

      {props.scala_package_name && props.scala_package_version && (
        <a href="https://docs.prophecy.io/engineers/package-hub">
          <span className="badge badge-dependency">
            {props.scala_package_name} {props.scala_package_version}
          </span>
        </a>
      )}

      {props.python_lib && (
        <a href="https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries">
          <span className="badge badge-dependency">
            ProphecyLibsPython {props.python_lib}
          </span>
        </a>
      )}

      {props.scala_lib && (
        <a href="https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries">
          <span className="badge badge-dependency">
            ProphecyLibsScala {props.scala_lib}
          </span>
        </a>
      )}

      {props.uc_single && (
        <a href="https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared">
          <span className="badge badge-spark">
            UC Dedicated Cluster {props.uc_single}
          </span>
        </a>
      )}

      {props.uc_shared && (
        <a href="https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared">
          <span className="badge badge-spark">
            UC Standard Cluster {props.uc_shared}
          </span>
        </a>
      )}

      {props.livy && (
        <a href="https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy">
          <span className="badge badge-spark">Livy {props.livy}</span>
        </a>
      )}

      <br />
      <br />
    </div>
  );
}
