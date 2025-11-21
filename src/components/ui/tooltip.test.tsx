import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@chakra-ui/react";
import { render } from "../../test-utils";
import { Tooltip } from "./tooltip";

test("renders tooltip trigger", () => {
  render(
    <Tooltip content="Tooltip content">
      <Button>Hover me</Button>
    </Tooltip>
  );

  expect(screen.getByText("Hover me")).toBeInTheDocument();
});

test("shows tooltip content on hover", async () => {
  const user = userEvent.setup();

  render(
    <Tooltip content="Tooltip content">
      <Button>Hover me</Button>
    </Tooltip>
  );

  const trigger = screen.getByText("Hover me");
  await user.hover(trigger);

  await waitFor(() => {
    expect(screen.getByText("Tooltip content")).toBeInTheDocument();
  });
});

test("does not render tooltip when disabled", () => {
  render(
    <Tooltip content="Tooltip content" disabled>
      <Button>Hover me</Button>
    </Tooltip>
  );

  expect(screen.getByText("Hover me")).toBeInTheDocument();
  expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
});

