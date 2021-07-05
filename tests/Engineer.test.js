const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("tests to check if an object is returned that has an employee name, id, an email, and a github username", () => {
    const testObject = new Engineer(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      "TimmyTinMan"
    );
    expect("employeeName" in testObject).toEqual(true);
    expect("employeeId" in testObject).toEqual(true);
    expect("employeeEmail" in testObject).toEqual(true);
    expect("github" in testObject).toEqual(true);
  });

  it("tests to make sure the employee has the role of engineer", () => {
    const testRole = "Engineer";
    const expectedOutcome = new Engineer().getRole();
    expect(expectedOutcome).toEqual(testRole);
  });

  it("tests to get the employee name", () => {
    const testName = "Timmy";
    const expectedOutcome = new Engineer(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      "TimmyTinMan"
    ).getName();
    expect(expectedOutcome).toEqual(testName);
  });

  it("tests to get the employee ID", () => {
    const testId = 54;
    const expectedOutcome = new Engineer(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      "TimmyTinMan"
    ).getId();
    expect(expectedOutcome).toEqual(testId);
  });

  it("tests to get the employee email", () => {
    const testEmail = "TimmyTheTinMan504@gmail.com";
    const expectedOutcome = new Engineer(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      "TimmyTinMan"
    ).getEmail();
    expect(expectedOutcome).toEqual(testEmail);
  });

  it("tests to get the employee github", () => {
    const testGithub = "TimmyTinMan";
    const expectedOutcome = new Engineer(
      "Timmy",
      54,
      "TimmyTheTinMan504@gmail.com",
      "TimmyTinMan"
    ).getGithub();
    expect(expectedOutcome).toEqual(testGithub);
  });
});
