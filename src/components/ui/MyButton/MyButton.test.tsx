import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render } from "../../../test-utils";
import { MyButton } from "./MyButton";

test("renders a button", () => {
  render(<MyButton />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("handles click event", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<MyButton onClick={handleClick} />);

  const btn = screen.getByRole("button", { name: "Click me" });
  expect(btn).toBeInTheDocument();

  await user.click(btn);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
