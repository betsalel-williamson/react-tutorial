import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Message from "./Message";

describe("Message tests", () => {
  test("Text should contain others when empty", () => {
    const component = render(<Message />);
    expect(component.getByText("Hello others")).toBeDefined();
  });

  test("Text should contain content", () => {
    const component = render(<Message name={"Saul"} />);
    expect(component.getByText("Hello Saul")).toBeDefined();
  });

  test("Text should be h1", () => {
    const component = render(<Message name={""} />);
    const header = component.getAllByRole("heading");
    expect(header.length).toBe(1);
    expect(header[0].tagName).toBe("H1");
  });
});
