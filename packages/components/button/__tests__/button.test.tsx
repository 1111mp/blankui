import { act, render } from "@testing-library/react";

import { Button } from "../src";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button color="primary">Button</Button>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should trigger onClick function", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Button</Button>);

    act(() => {
      getByRole("button").click();
    });

    expect(onClick).toHaveBeenCalled();
  });
});
