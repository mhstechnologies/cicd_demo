const fibonacci = require("./fibonacci.js");

describe("Fibonacci Tests", () => {
  it("return [0, 1] when 2", () => {
    expect(fibonacci(2)).toStrictEqual([0, 1]);
  })

  it("return [0] when 1", () => {
    expect(fibonacci(1)).toStrictEqual(0);
  })

  it("returns Not a Number when ram", () => {
    expect(fibonacci("ram")).toStrictEqual("Not a Number!");
  })

  it("returns [] when 0", () => {
    expect(fibonacci(0)).toStrictEqual([]);
  })
}); 