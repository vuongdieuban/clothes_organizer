import React, { Component } from "react";

function ListGroup(props) {
  const displayData = () => {
    const { data, selectedItem, onSelectItem } = props;
    return data.map(item => {
      return (
        <li
          className={
            item === selectedItem
              ? "list-group-item active clickable"
              : "list-group-item clickable"
          }
          key={item.name}
          onClick={() => onSelectItem(item)}
        >
          {item.name}
        </li>
      );
    });
  };
  return (
    <div>
      <ul className="list-group">{displayData()}</ul>
    </div>
  );
}

export default ListGroup;
