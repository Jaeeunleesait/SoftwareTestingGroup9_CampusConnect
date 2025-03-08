import { Button } from "@/components/ui/button";
import { fireEvent, render, screen } from "@testing-library/react";

test("Calls onClick when Button is clicked", () => {
  const handleClick = jest.fn();
  const buttonName = "test button";
  render(<Button onClick={handleClick}>{buttonName}</Button>);

  const button = screen.getByText(buttonName);
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
