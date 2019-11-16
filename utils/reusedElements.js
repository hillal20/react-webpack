import checkPropTypes from "check-prop-types";

export const finByDataAttribute = (component, attribute) => {
  return component.find(`[data-test="${attribute}"]`);
};

export const checkPropsFn = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsError;
};
