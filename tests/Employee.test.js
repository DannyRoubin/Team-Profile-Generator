const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("tests to check if an object is returned that has an employee name, id, and an email", () => {
    const testObject = new Employee("Timmy", 54, "TimmyTheTinMan504@gmail.com");
    expect("employeeName" in testObject).toEqual(true);
    expect("employeeId" in testObject).toEqual(true);
    expect("employeeEmail" in testObject).toEqual(true);
  });

  it("tests to make sure the employee has the role of employee", () => {
    const testRole = "Employee";
    const expectedOutcome = new Employee().getRole();
    expect(expectedOutcome).toEqual(testRole);
  });

  it("tests to get the employee name", () => {
    const testName = "Timmy";
    const expectedOutcome = new Employee(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com"
    ).getName();
    expect(expectedOutcome).toEqual(testName);
  });

  it("tests to get the employee ID", () => {
    const testId = 54;
    const expectedOutcome = new Employee(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com"
    ).getId();
    expect(expectedOutcome).toEqual(testId);
  });

  it("tests to get the employee email", () => {
    const testEmail = "TimmyTheTinMan504@gmail.com";
    const expectedOutcome = new Employee(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com"
    ).getEmail();
    expect(expectedOutcome).toEqual(testEmail);
  });
});
