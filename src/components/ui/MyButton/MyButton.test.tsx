import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithChakra } from "../../../test-utils";
import { MyButton } from "./MyButton";

test("renders Chakra button and handles click", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  renderWithChakra(<MyButton onClick={handleClick} />);

  const btn = screen.getByRole("button", { name: "Click me" });

  expect(btn).toBeInTheDocument();

  await user.click(btn);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
