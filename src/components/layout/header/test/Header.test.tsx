import { render, screen } from "@testing-library/react";
import Header from "../Header";
import userEvent from "@testing-library/user-event";

describe("Header Navigation operates correctly", () => {
  test("Toggle button displays and hides menu when clicked", async () => {
    // Render the Header component
    const { container } = render(<Header />);
    const user = userEvent.setup();

    // Set width of header < 800px breakpoint to access mobile menu functionality
    container.style.width = "600px";

    // Get toggle button and toggle menu
    const toggle = screen.getByRole("button", { name: /main menu/i });
    const menu = screen.getByTestId("toggle-menu");

    // Check that toggle-menu is first hidden
    let computedStyle = window.getComputedStyle(menu);
    expect(computedStyle.display).toBe("none");

    // Click toggle button and check menu style change
    await user.click(toggle);
    computedStyle = window.getComputedStyle(menu);
    expect(computedStyle.display).toBe("block");
  });

  test("Expected links are present in the menu", async () => {
    // Render the Header component
    const { container } = render(<Header />);

    // Set width of header > 800px breakpoint to access full menu
    container.style.width = "900px";

    // Find the links in Header
    const baseLinks = await screen.findAllByRole("link");

    // Confirm name of links
    const linkNames = baseLinks.map((element) => element.innerText);
    expect(linkNames).toHaveLength(3);
    expect(linkNames).toEqual(["Home", "Register", "Login"]);
  });
});
