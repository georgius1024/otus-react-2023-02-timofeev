import {  compose} from "./compose";

test("compose", () => {
  const sqr = (x) => x * x;
  const inc = (x) => x + 1;

  expect(compose(sqr, inc)(1)).toBe(4);
  expect(compose(sqr, inc)(10)).toBe(121);

  expect(compose(inc, sqr)(1)).toBe(2);
  expect(compose(inc, sqr)(10)).toBe(101);

  expect(compose(inc, inc, inc)(1)).toBe(4);
  expect(compose(sqr, sqr, sqr)(2)).toBe(256);
});
