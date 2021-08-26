const Employee = require("../lib/Intern");
const emp = new Employee("Gail", "7890", "gail@gmail.com");

test("it should get the constructor values for the Employee object", () => {
  expect(emp.name).toBe("Gail");
  expect(emp.id).toBe("7890");
  expect(emp.email).toBe("gail@gmail.com");
});

test("it should  get the name from the getName() method", () => {
  expect(emp.getName()).toBe("Gail");
});

test("it should get the id from the getId() method", () => {
  expect(emp.getId()).toBe("7890");
});

test("it should  get the email from the getEmail() method", () => {
  expect(emp.getEmail()).toBe("gail@gmail.com");
});

test("it should get the role from the getRole() method", () => {
  expect(emp.getRole()).toBe("Intern");
});
