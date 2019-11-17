import React from "react";
import App from "../app";
import { shallow, mount } from "enzyme";
import { finByDataAttribute } from "../../utils/reusedElements";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const initialState = { output: 10 };
const mockStore = configureMockStore(initialState);

import { shallow, mount } from "enzyme";
const store = mockStore({
  startup: { complete: false }
});

describe("==== Testing App ======", () => {
  const setUpFn = props => {
    return mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setUpFn();
  });
  it("should render with out errors ", () => {
    const image = finByDataAttribute(wrapper, "img");
    expect(image.length).toBe(2);
  });
});
