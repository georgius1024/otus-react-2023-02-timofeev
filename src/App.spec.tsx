import { render, screen } from "@testing-library/react";

import App from "@/App";

describe("App", () => {
  it("renders headline", () => {
    expect(render(<App />)).toMatchSnapshot();
  });
});
