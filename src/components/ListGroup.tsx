import { useState } from "react";

export interface MyListItem {
  id: number;
  content: string;
}

export interface ListGroupProps {
  items: MyListItem[];
  heading: string;
  onSelectedItem: (item: MyListItem) => void;
}

export default function ListGroup({
  items,
  heading,
  onSelectedItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="display-1">{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </>
  );
}
