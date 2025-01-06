import React from "react";

export function Release({ item, path }) {
  return (
    <section>
      <ul>
        {item.toc.map((tocItem, index) => (
          <li key={index}>
            <a href={`${path}#${tocItem.id}`}>{tocItem.value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
