import Praefix from "../src/praefix";

describe("praefix", () => {
  it("should return undefined because no prefixed function name were found", () => {
    // given
    const mockedWindow = {};

    // when
    const prefixedFunctionNames = Praefix("requestAnimationFrame", mockedWindow);

    // then
    expect(prefixedFunctionNames).toBeUndefined();
  });

  it("should return an array with prefixed function names", () => {
    // given
    const mockedWindow = {
        msRequestAnimationFrame: () => {}
    };

    // when
    const prefixedFunctionNames = Praefix("requestAnimationFrame", mockedWindow);

    // then
    expect(prefixedFunctionNames).toBeDefined();
    expect(prefixedFunctionNames).toEqual(mockedWindow.msRequestAnimationFrame);
  });

  it("should return an array with prefixed function names, cameCase should not care", () => {
    // given
    const mockedWindow = {
        mozRequestAnimationFrame: () => {}
    };

    // when
    const prefixedFunctionNames = Praefix("RequestAnimationFrame", mockedWindow);

    // then
    expect(prefixedFunctionNames).toBeDefined();
    expect(prefixedFunctionNames).toEqual(mockedWindow.mozRequestAnimationFrame);
  });
});
