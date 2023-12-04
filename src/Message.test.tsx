import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Message from "./Message";

describe("Message tests", () => {
  test("Text should contain content", () => {
    const component = render(<Message />);
    expect(component.getByText("Hello others")).toBeDefined();
  });

  test("Text should be h1", () => {
    const component = render(<Message />);
    const header = component.getByText("Hello others");

    expect(header.tagName).toBe("H1");
  });
});
