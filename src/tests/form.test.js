import React, { useState } from "react";
import { shallow } from "enzyme";
import Form, { testName } from "../form/form";
import { finByDataAttribute, checkPropsFn } from "../../utils/reusedElements";

const setUpFn = props => {
  return shallow(<Form {...props} />);
};

describe("==== testing the form ====== ", () => {
  describe(" *** has props ***  ", () => {
    let component;
    let propsExample;

    beforeEach(() => {
      propsExample = {
        sirName: "john",
        age: 30,
        occupation: "cop",
        formArray: [0, 1, 2, 3, 4],
        formObject: { hill: "aissani" },
        formArrayOfObjects: [
          { x: "bye", y: "bye", c: [], f: true },
          { x: "bye", y: "bye", c: [], f: true }
        ]
      };
      component = setUpFn(propsExample);
    });

    it("  check for props errors", () => {
      const propsErrors = checkPropsFn(component, propsExample);
      expect(propsErrors).toBeUndefined();
    });

    it("rendering a form with no error ", () => {
      const wrapper = finByDataAttribute(component, "form");
      expect(wrapper.length).toBe(1);
    });

    it("testing inputs change ", () => {
      const wrapper = finByDataAttribute(component, "input");
      expect(wrapper.length).toBe(1);
      wrapper.simulate("change", { target: { value: "changed" } });
      // console.log("value ==>", wrapper.props());
      expect(testName).toEqual("changed");

      ///////////////app.test.js

      expect(component.find('input[type="name"]').props()).toEqual({
        type: "name",
        name: "name",
        ["data-test"]: "input",
        placeholder: "Enter Name",
        value: "changed",
        onChange: expect.any(Function)
      });

      const setName = jest.fn(x => (init = x));
      const useStateSpy = jest.spyOn(React, "useState");

      useStateSpy.mockImplementation(init => {
        console.log("init ==> ", init);
        return [init, setName];
      });

      // expect(setName).toHaveBeenCalled();
    });
  }); // des props

  // describe(" ***  has no props *** ", () => {
  //   let component;
  //   beforeEach(() => {
  //     const props = {};
  //     component = setUpFn(props);
  //   });

  //   it("rendering a form with no error ", () => {
  //     const wrapper = finByDataAttribute(component, "form");
  //     expect(wrapper.length).toBe(0);
  //   });
  // }); // des no prop
});
