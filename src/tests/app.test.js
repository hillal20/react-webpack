import React from "react";
import App from "../app";
import { shallow } from "enzyme";
import { finByDataAttribute } from "../../utils/reusedElements";

describe("==== Testing App ======", () => {
  const appFn = () => {
    return shallow(<App />);
  };

  let component;
  beforeEach(() => {
    component = appFn();
  });
  it("should render with out errors ", () => {
    const image = finByDataAttribute(component, "img");
    expect(image.length).toBe(2);
  });
});
