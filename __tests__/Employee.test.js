const Employee = require("../lib/Employee");
const emp = new Employee("Grace", "54321", "mggs@gmail.com");

test("it should get the constructor values for the Employee object", () => {
  expect(emp.name).toBe("Grace");
  expect(emp.id).toBe("54321");
  expect(emp.email).toBe("mggs@gmail.com");
});

test("it should get the name from the getName() method", () => {
  expect(emp.getName()).toBe("Grace");
});

test("it should get the id from the getId() method", () => {
  expect(emp.getId()).toBe("54321");
});

test("it should get the email from the getEmail() method", () => {
  expect(emp.getEmail()).toBe("mggs@gmail.com");
});

test("it should we can get the role from the getRole() method", () => {
  expect(emp.getRole()).toBe("Employee");
});
