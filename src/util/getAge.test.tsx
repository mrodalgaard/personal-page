import getAge from "./getAge";

describe("getAge", () => {
  it("returns an age", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    const dateString = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

    expect(getAge(dateString)).toBe(10);
  });

  it("handles invalid inputs", () => {
    expect(getAge("55-55-2010")).toBeUndefined();
    expect(getAge("")).toBeUndefined();
    expect(getAge("DUMMY")).toBeUndefined();
    expect(getAge("12-12-2050")).toBeUndefined();
  });
});
