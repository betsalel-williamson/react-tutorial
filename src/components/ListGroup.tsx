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
  // default state is out-of-bounds index
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="display-1">{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={["list-group-item", selectedIndex === index && "active"]
              .filter(Boolean)
              .join(" ")}
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
