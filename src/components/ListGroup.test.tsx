import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import ListGroup, { MyListItem } from "./ListGroup";

describe("ListGroup tests", () => {
  test("Size of ListGroup", () => {
    const myItems: MyListItem[] = [
      { id: 1, content: "one" },
      { id: 2, content: "two" },
      { id: 3, content: "three" },
      { id: 4, content: "four" },
      { id: 5, content: "five" },
    ];

    const component = render(
      <ListGroup
        items={myItems}
        heading={""}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSelectedItem={function (_item: MyListItem): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const items = component.getAllByRole("listitem");
    expect(items.length).toBe(5);
  });

  test("Text should be h1", () => {
    const component = render(
      <ListGroup
        items={[]}
        heading={""}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSelectedItem={function (_item: MyListItem): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const header = component.getAllByRole("heading");
    expect(header.length).toBe(1);
    expect(header[0].tagName).toBe("H1");
  });

  // todo: if empty list, then report empty
});
