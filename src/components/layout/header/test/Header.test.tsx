import { render, screen } from "@testing-library/react";
import Header from "../Header";
import userEvent from "@testing-library/user-event";

describe("Header Navigation operates correctly", () => {
  test("Toggle button displays and hides menu when clicked", async () => {
    // Render the Header component
    render(<Header />);
    const user = userEvent.setup();

    // Get toggle button and toggle menu
    const toggle = screen.getByRole("button", { name: /main menu/i });
    const menu = screen.getByTestId("toggle-menu");

    // Check that toggle-menu is first displayed
    expect(menu).toHaveClass("hidden");

    await user.click(toggle);

    expect(menu).toHaveClass("block");
  });
});
