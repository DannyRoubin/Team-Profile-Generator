const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("tests to check if an object is returned that has an employee name, id, an email, and an office number", () => {
    const testObject = new Manager(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      101
    );
    expect("employeeName" in testObject).toEqual(true);
    expect("employeeId" in testObject).toEqual(true);
    expect("employeeEmail" in testObject).toEqual(true);
    expect("officeNumber" in testObject).toEqual(true);
  });

  it("tests to make sure the employee has the role of Manager", () => {
    const testRole = "Manager";
    const expectedOutcome = new Manager().getRole();
    expect(expectedOutcome).toEqual(testRole);
  });

  it("tests to get the employee name", () => {
    const testName = "Timmy";
    const expectedOutcome = new Manager(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      101
    ).getName();
    expect(expectedOutcome).toEqual(testName);
  });

  it("tests to get the employee ID", () => {
    const testId = 54;
    const expectedOutcome = new Manager(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      101
    ).getId();
    expect(expectedOutcome).toEqual(testId);
  });

  it("tests to get the employee email", () => {
    const testEmail = "TimmyTheTinMan504@gmail.com";
    const expectedOutcome = new Manager(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      101
    ).getEmail();
    expect(expectedOutcome).toEqual(testEmail);
  });

  it("tests to get the Manager office number", () => {
    const testOfficeNum = 101;
    const expectedOutcome = new Manager(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      101
    ).OfficeNumber();
    expect(expectedOutcome).toEqual(testOfficeNum);
  });
});
