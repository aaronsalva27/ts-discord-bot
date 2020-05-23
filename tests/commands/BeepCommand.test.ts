import DiscordClient from "../../src/Client";

describe("Simple test", function () {
  it("test", function () {
    let a = 8;
    
    expect(a).toBe(8);
  });
});

test("another test", () => {
  expect(2).toBe(2);
});
