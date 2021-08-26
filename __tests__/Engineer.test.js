const Engineer = require("../lib/Engineer");

test("Creates an Engineer object", () => {
  const engr = new Engineer(
    "Jay",
    "12345",
    "sarmientocarlopher@gmail.com",
    "csarmiento17"
  );

  expect(engr.name).toEqual("Jay");
  expect(engr.id).toEqual("12345");
  expect(engr.email).toEqual("sarmientocarlopher@gmail.com");
  expect(engr.github).toEqual("csarmiento17");
});

test("Gets engineer's role", () => {
  const engr = new Engineer(
    "Jay",
    "12345",
    "sarmientocarlopher@gmail.com",
    "csarmiento17"
  );

  expect(engr.getRole()).toEqual("Engineer");
});
