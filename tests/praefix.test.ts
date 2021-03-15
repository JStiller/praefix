import Praefix from "../src/praefix";

describe("praefix", () => {
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

  it("should return an array with prefixed function names, cameCase shouldnt care", () => {
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
