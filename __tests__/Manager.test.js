const Manager = require("../lib/Manager");

test("Creates Manager object", () => {
  const mgr = new Manager(
    "Carlopher",
    "ABC123",
    "sarmientocarlopher@gmail.com",
    "416-000-0000"
  );

  expect(mgr.name).toEqual("Carlopher");
  expect(mgr.id).toEqual("ABC123");
  expect(mgr.email).toEqual("sarmientocarlopher@gmail.com");
  expect(mgr.officeNo).toEqual("416-000-0000");
});

test("Gets Manager's role", () => {
  const mgr = new Manager(
    "Carlopher",
    "ABC123",
    "sarmientocarlopher@gmail.com",
    "416-000-0000"
  );

  expect(mgr.getRole()).toEqual("Manager");
});
