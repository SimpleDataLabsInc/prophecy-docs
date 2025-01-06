import React from "react";

const PlainTextTOC = ({ toc }) => {
  const renderTOC = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.value}
          {item.children && renderTOC(item.children)}
        </li>
      ))}
    </ul>
  );

  return <div>{renderTOC(toc)}</div>;
};

export default PlainTextTOC;
